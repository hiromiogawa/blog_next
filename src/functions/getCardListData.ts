import type { BlogType } from '@/types'

const getCardListData = (blogs: BlogType[]) =>
  blogs.map((blog) => ({
    id: blog.id,
    category: blog.category,
    createdAt: blog.createdAt,
    title: blog.title,
    tags: blog.tags
  }))

export default getCardListData
