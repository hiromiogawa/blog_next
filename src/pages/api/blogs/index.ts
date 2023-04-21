import { searchBlogs } from '@/functions/getData'
import { NextApiRequest, NextApiResponse } from 'next'
import { PER_PAGE } from '@/config'

const getSearchBooks = async (
  req: NextApiRequest & { params: { page: string } },
  res: NextApiResponse
) => {
  const keyword = req.query.keyword
  const page = req.query.page

  const offset = Number(page) > 1 ? PER_PAGE / (Number(page) - 1) : 0

  if (!keyword) return {}
  const response = await searchBlogs(
    Array.isArray(keyword) ? keyword.join('') : keyword,
    offset
  )
  return res.status(200).json(response)
}

export default getSearchBooks
