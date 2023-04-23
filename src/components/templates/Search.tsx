import styled from 'styled-components'
import { useState, useEffect, useContext, Suspense } from 'react'

// context
import { SearchContext } from '@/components/providers/SearchProvider'

// functions
import getCardListData from '@/functions/getCardListData'

// components
import Layout, { LayoutType } from '@/components/common/Layout'
import LoadingSpinnerBox from '@/components/atoms/Loading'
import VerticalCardList, {
  VerticalCardListType
} from '@/components/organisms/VerticalCardList'
import PagiNationBySearch from '@/components/molecules/PagiNationBySearch'

export type SearchType = Pick<LayoutType, 'categories' | 'tags'>

const Search = ({ categories, tags }: SearchType) => {
  const {
    keyword,
    setKeyword,
    page,
    setPage,
    blogs,
    searchblogs,
    totalCount,
    dataLoaded
  } = useContext(SearchContext)
  const [cardListData, setCardListData] = useState<
    VerticalCardListType['cardListData'] | []
  >([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleClickPagiNavi = async (clickPage: number) => {
    setPage(clickPage.toString())
    await searchblogs(keyword, clickPage.toString())
  }

  useEffect(() => {
    const getUrlParams = () => {
      const queryString = window.location.search
      const urlParams = new URLSearchParams(queryString)
      const paramsKeyword = urlParams.get('keyword')
      const paramsPage = urlParams.get('page')
      if (paramsKeyword) setKeyword(paramsKeyword)
      if (paramsPage) setPage(paramsPage)
      if (!paramsKeyword && !paramsPage) setIsLoading(true)
    }

    const handlePopstate = () => {
      setIsLoading(false)
      getUrlParams()
    }

    getUrlParams()

    window.addEventListener('popstate', handlePopstate)
    return () => {
      window.removeEventListener('popstate', handlePopstate)
    }
  }, [])

  useEffect(() => {
    if (keyword && !isLoading) {
      searchblogs(keyword, page)
      setIsLoading(true)
    }
  }, [keyword])

  useEffect(() => {
    if (blogs.length !== 0) setCardListData(getCardListData(blogs))
  }, [blogs])

  return (
    <Layout categories={categories} tags={tags}>
      {dataLoaded ? (
        cardListData.length === 0 ? (
          <p>該当件数は0件です</p>
        ) : (
          <>
            <StyledVerticalCardList cardListData={cardListData} />
            <StyledPagiNationBySearch
              totalCount={totalCount}
              onClick={handleClickPagiNavi}
              currentPage={Number(page)}
            />
          </>
        )
      ) : (
        <StyledLoadingSpinnerBox />
      )}
    </Layout>
  )
}

export default Search

const StyledLoadingSpinnerBox = styled(LoadingSpinnerBox)`
  margin: 0 auto;
`

const StyledVerticalCardList = styled(VerticalCardList)`
  margin-top: 24px;
`

const StyledPagiNationBySearch = styled(PagiNationBySearch)`
  margin-top: 40px;
`
