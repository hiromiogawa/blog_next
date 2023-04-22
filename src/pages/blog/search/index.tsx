// functions
import { getCategories, getTags } from '@/functions/getData'

// components
import Search from '@/components/templates/Search'
import Layout, { LayoutType } from '@/components/common/Layout'

type PropTypes = Pick<LayoutType, 'categories' | 'tags'>

const SearchPage = ({ categories, tags }: PropTypes) => {
  return (
    <Layout categories={categories} tags={tags}>
      <Search />
    </Layout>
  )
}

export default SearchPage

export const getStaticProps = async () => {
  const categoriesData = await getCategories()
  const tagsData = await getTags()

  return {
    props: {
      categories: categoriesData.contents,
      tags: tagsData.contents
    }
  }
}
