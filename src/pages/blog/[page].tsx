import { PER_PAGE, MAX_LIMIT } from '@/config'

// functions
import { getBlogs, getCategories, getTags } from '@/functions/getData'
import getRange from '@/functions/getRange'

// components
import VerticalCardLists, {
  VerticalCardListsType
} from '@/components/templates/VerticalCardLists'

// types
import type { GetStaticProps } from 'next'
import type { BlogType, ResDataType, ParamsType } from '@/types'

const BlogListPage = ({ ...props }: VerticalCardListsType) => {
  return <VerticalCardLists {...props} />
}

export default BlogListPage

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
export const getStaticProps: GetStaticProps<
  VerticalCardListsType,
  ParamsType
> = async (context) => {
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
