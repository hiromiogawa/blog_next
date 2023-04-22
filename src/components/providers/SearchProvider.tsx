import { createContext, useState } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'

// types
import type { BlogType } from '@/types'

export type SearchContextType = {
  keyword: string
  setKeyword: (event: string) => void
  page: string
  setPage: (event: string) => void
  blogs: BlogType[] | []
  totalCount: number
  searchblogs: Function
  handleClickSubmit: () => void
}

export const SearchContext = createContext<SearchContextType>({
  keyword: '',
  setKeyword: () => {},
  page: '1',
  setPage: () => {},
  blogs: [],
  totalCount: 0,
  searchblogs: () => {},
  handleClickSubmit: () => {}
})

export const SearchProvider = ({
  children = ''
}: {
  children: React.ReactNode
}) => {
  const [keyword, setKeyword] = useState<string>('')
  const [page, setPage] = useState<string>('1')
  const [blogs, setBlogs] = useState<BlogType[]>([])
  const [totalCount, setTotalCount] = useState<number>(0)
  const router = useRouter()
  const currentPath = router.pathname

  const addQueryParams = () => {
    window.history.pushState(null, '', `?keyword=${keyword}&page=${page}`)
  }

  const searchblogs = async (keyword: string, page: string) => {
    const res = await axios.get('/api/blogs', {
      params: {
        keyword,
        page
      }
    })

    setTotalCount(res.data.totalCount)
    setBlogs(res.data.contents)
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const paramsKeyword = urlParams.get('keyword')
    const paramsPage = urlParams.get('page')

    if (currentPath !== '/blog/search')
      Router.push('/blog/search').then(() => {
        addQueryParams()
      })

    // パラメータ書き換え
    if (paramsKeyword !== keyword || paramsPage !== page) addQueryParams()
  }

  const handleClickSubmit = () => {
    setPage('1')
    searchblogs(keyword, '1')
  }

  return (
    <SearchContext.Provider
      value={{
        keyword,
        setKeyword,
        page,
        setPage,
        blogs,
        totalCount,
        searchblogs,
        handleClickSubmit
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
