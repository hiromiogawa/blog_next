import { PER_PAGE, MAX_LIMIT } from '@/config'

// functions
import { getBlogsByTags, getCategories, getTags } from '@/functions/getData'
import getRange from '@/functions/getRange'

// components
import VerticalCardLists, {
  VerticalCardListsType
} from '@/components/templates/VerticalCardLists'

// types
import type { GetStaticProps } from 'next'
import type { ResDataType, ParamsType, TagType } from '@/types'

const BlogListPage = ({ ...props }: VerticalCardListsType) => {
  return <VerticalCardLists {...props} />
}

export default BlogListPage

// 動的なページを作成
export const getStaticPaths = async () => {
  const tags: { contents: TagType[] } = await getTags()

  const resPaths = await Promise.all(
    tags.contents.map(async (tag) => {
      const blogs: ResDataType = await getBlogsByTags(tag.id, MAX_LIMIT)

      return getRange(1, Math.ceil(blogs.totalCount / PER_PAGE)).map(
        (repo) => `/blog/tag/${tag.id}/${repo}`
      )
    })
  )

  const paths = resPaths.flat()
  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps<
  VerticalCardListsType,
  ParamsType & { tag: string }
> = async (context) => {
  const categoriesData = await getCategories()
  const tagsData = await getTags()
  const blogsData = await getBlogsByTags(
    context.params!.tag,
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
