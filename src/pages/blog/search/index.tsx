import { useState, useEffect, Suspense, useCallback } from 'react'
import axios from 'axios'

// functions
import getCardListData from '@/functions/getCardListData'

// components
import VerticalCardList, {
  VerticalCardListType
} from '@/components/organisms/VerticalCardList'
import PagiNationBySearch from '@/components/molecules/PagiNationBySearch'

// types
import type { BlogType } from '@/types'

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const [blogs, setBlogs] = useState<BlogType[] | []>([])
  const [cardListData, setCardListData] = useState<
    VerticalCardListType['cardListData'] | []
  >([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<string>('1')
  const [totalCount, setTotalCount] = useState<number>(0)

  const searchblogs = async (keyword: string, page: string) => {
    const res = await axios.get('/api/blogs', {
      params: {
        keyword,
        page
      }
    })

    setTotalCount(res.data.totalCount)
    setBlogs(res.data.contents)
    window.history.pushState(null, '', `?keyword=${keyword}&page=${page}`)
  }

  const handleClickSubmit = () => {
    setPage('1')
    searchblogs(keyword, '1')
  }

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
      <div style={{ display: 'flex' }}>
        <input
          value={keyword}
          placeholder="キーワードを入力"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={handleClickSubmit}>検索実行</button>
      </div>

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
    </div>
  )
}

export default Search
