import { PER_PAGE, MAX_LIMIT } from '@/config'

import type { ParsedUrlQuery } from 'node:querystring'

// functions
import { getBlog, getBlogs, getCategories, getTags } from '@/functions/getData'
import getRange from '@/functions/getRange'

// components

// types
import type { GetStaticProps } from 'next'
import type { BlogType, ResDataType } from '@/types'

/** 一覧ページのgetStaticPropsで使用するcontext型宣言 */
export type ParamsType = ParsedUrlQuery & {
  id: string
}

const Detail = ({ blog, categories, tags }) => {
  return null
}

export default Detail

// 動的なページを作成
export const getStaticPaths = async () => {
  const blogs: { contents: BlogType[] } & ResDataType = await getBlogs(
    MAX_LIMIT
  )

  const paths = blogs.contents.map((blog) => `/blog/detail/${blog.id}`)

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps<
  { blog: BlogType },
  ParamsType
> = async (context) => {
  const categoriesData = await getCategories()
  const tagsData = await getTags()
  const blogData = await getBlog(context.params!.id)

  return {
    props: {
      blog: blogData,
      categories: categoriesData.contents,
      tags: tagsData.contents
    }
  }
}
