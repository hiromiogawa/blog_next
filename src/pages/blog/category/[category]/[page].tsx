import { PER_PAGE, MAX_LIMIT } from '@/config'

// functions
import { getBlogsByCategory, getCategories, getTags } from '@/functions/getData'
import getRange from '@/functions/getRange'

// components
import VerticalCardLists, {
  VerticalCardListsType
} from '@/components/templates/VerticalCardLists'

// types
import type { GetStaticProps } from 'next'
import type { BlogType, CategoryType, ResDataType, ParamsType } from '@/types'

const BlogListPage = ({ ...props }: VerticalCardListsType) => {
  return <VerticalCardLists {...props} />
}

export default BlogListPage

// 動的なページを作成
export const getStaticPaths = async () => {
  const categories: { contents: CategoryType[] } = await getCategories()

  const resPaths = await Promise.all(
    categories.contents.map(async (category) => {
      const blogs: ResDataType = await getBlogsByCategory(
        category.id,
        MAX_LIMIT
      )

      return getRange(1, Math.ceil(blogs.totalCount / PER_PAGE)).map(
        (repo) => `/blog/category/${category.id}/${repo}`
      )
    })
  )

  const paths = resPaths.flat()
  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps<
  VerticalCardListsType,
  ParamsType & { category: string }
> = async (context) => {
  const categoriesData = await getCategories()
  const tagsData = await getTags()
  const blogsData = await getBlogsByCategory(
    context.params!.category,
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
