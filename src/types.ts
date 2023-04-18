import type { ParsedUrlQuery } from 'node:querystring'

/** 一覧ページのgetStaticPropsで使用するcontext型宣言 */
export type ParamsType = ParsedUrlQuery & {
  page: string
}

/** カテゴリ */
export type CategoryType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
  logo: {
    url: string
    height: number
    width: number
  }
}

/** タグ */
export type TagType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  name: string
}

/** ブログ */
export type BlogType = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  category: CategoryType
  tags: TagType[]
  connections: BlogType[]
}

/** レスポンスデータ */
export type ResDataType = {
  totalCount: number
  offset: number
  limit: number
}
