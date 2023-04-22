import { useState, useEffect, useContext, Suspense } from 'react'

// context
import {
  SearchContext,
  SearchProvider
} from '@/components/providers/SearchProvider'

// functions
import getCardListData from '@/functions/getCardListData'

// components
import VerticalCardList, {
  VerticalCardListType
} from '@/components/organisms/VerticalCardList'
import PagiNationBySearch from '@/components/molecules/PagiNationBySearch'

const Search = () => {
  const { keyword, setKeyword, page, setPage, blogs, searchblogs, totalCount } =
    useContext(SearchContext)
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
  }, [keyword, isLoading])

  useEffect(() => {
    setCardListData(getCardListData(blogs))
  }, [blogs])

  return (
    <div>
      <SearchProvider>
        <Suspense fallback={<div>読み込み中...</div>}>
          {cardListData.length === 0 ? (
            <p>該当件数は0件です</p>
          ) : (
            <>
              <VerticalCardList cardListData={cardListData} />
              <PagiNationBySearch
                totalCount={totalCount}
                onClick={handleClickPagiNavi}
                currentPage={Number(page)}
              />
            </>
          )}
        </Suspense>
      </SearchProvider>
    </div>
  )
}

export default Search
