import styled from 'styled-components'
import Router from 'next/router'
import { PER_PAGE, MAX_LIMIT } from '@/config'
import ReactPaginate from 'react-paginate'

// functions
import { getBlogs, getCategories, getTags } from '@/functions/getData'
import getRange from '@/functions/getRange'
import getCardListData from '@/functions/getCardListData'

// components
import Layout from '@/components/common/Layout'
import VerticalCardList from '@/components/organisms/VerticalCardList'
import PagiNation, { PagiNationType } from '@/components/molecules/PagiNation'

// types
import type { GetStaticProps } from 'next'
import type {
  BlogType,
  CategoryType,
  TagType,
  ResDataType,
  ParamsType
} from '@/types'

export type BlogListType = {
  blogs: BlogType[]
  categories: CategoryType[]
  tags: TagType[]
} & Pick<PagiNationType, 'totalCount'>

const BlogListPage = ({
  blogs,
  categories,
  tags,
  totalCount
}: BlogListType) => {
  // blogsをcardListのデータに変換
  const cardListData = getCardListData(blogs)

  return (
    <Layout categories={categories} tags={tags}>
      <VerticalCardList CardListData={cardListData} />
      <StyledPaginate totalCount={totalCount} />
    </Layout>
  )
}

export default BlogListPage

const StyledPaginate = styled(PagiNation)`
  margin-top: 40px;
`

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos: { contents: BlogType[] } & ResDataType = await getBlogs(
    MAX_LIMIT
  )

  const paths = getRange(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/${repo}`
  )

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps<BlogListType, ParamsType> = async (
  context
) => {
  const categoriesData = await getCategories()
  const tagsData = await getTags()
  const blogsData = await getBlogs(
    PER_PAGE,
    (Number(context.params!.page) - 1) * PER_PAGE
  )

  return {
    props: {
      blogs: blogsData.contents,
      totalCount: blogsData.totalCount,
      categories: categoriesData.contents,
      tags: tagsData.contents
    }
  }
}
