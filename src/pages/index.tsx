import {
  getBlogs,
  getCategories,
  getBlogsByCategory,
  getTags
} from '@/functions/getData'

// components
import ContentsHead from '@/components/common/ContentsHead'
import SlideBlogLists, {
  SlideBlogListsType
} from '@/components/templates/SlideBlogLists'

// context
import { SearchProvider } from '@/components/providers/SearchProvider'

// types
import type { BlogType, CategoryType } from '@/types'

type PropTypes = SlideBlogListsType
const TopPage = ({ ...props }: PropTypes) => {
  return (
    <SearchProvider>
      <ContentsHead />
      <SlideBlogLists {...props} />
    </SearchProvider>
  )
}

export default TopPage

export const getStaticProps = async () => {
  const blogsData = await getBlogs(9)
  const categoriesData = await getCategories()
  const tagsData = await getTags()
  const blogByCategoryData = await Promise.all(
    categoriesData.contents.map(async (category: CategoryType) => {
      const result: { contents: BlogType[] } = await getBlogsByCategory(
        category.id,
        9
      )
      return {
        categoryName: category.name,
        categoryId: category.id,
        data: result.contents
      }
    })
  )

  const blogsDataAll = [
    {
      categoryName: 'New',
      categoryId: 'new',
      data: blogsData.contents
    },
    ...blogByCategoryData
  ]

  return {
    props: {
      blogs: blogsDataAll,
      categories: categoriesData.contents,
      tags: tagsData.contents
    }
  }
}
