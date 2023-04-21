import styled from 'styled-components'
import { MAX_LIMIT } from '@/config'
import { Device } from '@/styles/vars'

// functions
import { getBlog, getBlogs, getCategories, getTags } from '@/functions/getData'
import mediaQuery from '@/styles/functions/mediaQuery'

// components
import Layout, { LayoutType } from '@/components/common/Layout'
import ContentsHead from '@/components/common/ContentsHead'
import DetailMeta from '@/components/organisms/DetailMeta'
import DetailContent from '@/components/organisms/DetailContent'
import Html from '@/components/elements/Html'
import DetailRelated from '@/components/organisms/DetailRelated'

// types
import type { GetStaticProps } from 'next'
import type { BlogType, ResDataType } from '@/types'
import type { ParsedUrlQuery } from 'node:querystring'

/** 一覧ページのgetStaticPropsで使用するcontext型宣言 */
type ParamsType = ParsedUrlQuery & {
  id: string
}

export type PropTypes = {
  blog: BlogType
} & LayoutType

const Detail = ({ blog, categories, tags }: PropTypes) => {
  return (
    <Layout categories={categories} tags={tags}>
      <ContentsHead title={`${blog.title} | `} />
      <StyledDetail>
        <DetailMeta {...blog} />
        <StyledDetailContent>
          <Html>{blog.content}</Html>
        </StyledDetailContent>
      </StyledDetail>
      <StyledDetailRelated blogs={blog.connections} />
    </Layout>
  )
}

export default Detail

const StyledDetail = styled.section`
  font-family: 'Zen Maru Gothic', sans-serif;
  background-color: #fff;
  margin: 0 -32px;
  padding: 32px;
  border-radius: 12px;
  border: solid 3px #00ae95;
  ${mediaQuery(Device.tb)} {
    margin: 0 -16px;
  }
`

const StyledDetailContent = styled(DetailContent)`
  margin-top: 40px;
`

const StyledDetailRelated = styled(DetailRelated)`
  margin-top: 80px;
`

// 動的なページを作成
export const getStaticPaths = async () => {
  const blogs: { contents: BlogType[] } & ResDataType = await getBlogs(
    MAX_LIMIT
  )

  const paths = blogs.contents.map((blog) => `/blog/detail/${blog.id}`)

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps<
  { blog: BlogType },
  ParamsType
> = async (context) => {
  const categoriesData = await getCategories()
  const tagsData = await getTags()
  const blogData = await getBlog(context.params!.id)

  return {
    props: {
      blog: blogData,
      categories: categoriesData.contents,
      tags: tagsData.contents
    }
  }
}
