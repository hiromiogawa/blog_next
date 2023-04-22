// functions
import { getCategories, getTags } from '@/functions/getData'

//context
import { SearchProvider } from '@/components/providers/SearchProvider'

// components
import ContentsHead from '@/components/common/ContentsHead'
import Search, { SearchType } from '@/components/templates/Search'

type PropTypes = Pick<SearchType, 'categories' | 'tags'>

const SearchPage = ({ categories, tags }: PropTypes) => {
  return (
    <SearchProvider>
      <ContentsHead title="検索結果 | " />
      <Search categories={categories} tags={tags} />
    </SearchProvider>
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
