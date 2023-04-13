/** カテゴリ */
export type CategoryType = {
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
  connections: BlogType[]
}

/** レスポンスデータ */
export type ResData = {
  totalCount: number
  offset: number
  limit: number
}
