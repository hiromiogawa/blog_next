import styled from 'styled-components'
import {
  getBlogs,
  getCategories,
  getBlogsByCategory
} from '@/functions/getData'
import Router from 'next/router'
import { PER_PAGE } from '@/config'

// コンポーネント
import Link from 'next/link'
import Image from 'next/image'
import ReactPaginate from 'react-paginate'

// タイプ
import type { BlogType, CategoryType } from '@/types'

type PropTypes = {
  blogs: {
    categoryName: string
    categoryId: string
    data: Pick<BlogType, 'id' | 'category' | 'createdAt' | 'title'>[]
  }[]
  categories: Pick<CategoryType, 'id' | 'name'>[]
}
const Home = ({ blogs, categories }: PropTypes) => {
  return (
    <>
      {blogs.map((blogData) => {
        if (blogData.data.length === 0) return null
        return (
          <section key={blogData.categoryName}>
            <h1>{blogData.categoryName}</h1>
            <ul>
              {blogData.data.map((blog) => (
                <li key={blog.title}>
                  <Link href={`/blog/detail/${blog.id}`}>
                    <h2>{blog.title}</h2>
                  </Link>
                  <Link href={`/blog/${blog.category.id}/1`}>
                    {blog.category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/blog${
                blogData.categoryId === 'new' ? '' : `/${blogData.categoryId}`
              }/1`}
            >
              view more
            </Link>
          </section>
        )
      })}
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={`/blog/${category.id}/1`}>
              <h2>{category.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogsData = await getBlogs()
  const categoriesData = await getCategories()
  const blogByCategoryData = await Promise.all(
    categoriesData.contents.map(async (category: CategoryType) => {
      const result: { contents: BlogType[] } = await getBlogsByCategory(
        category.id
      )
      return {
        categoryName: category.name,
        categoryId: category.id,
        data: result.contents
      }
    })
  )

  const blogsDataAll = [
    {
      categoryName: 'New',
      categoryId: 'new',
      data: blogsData.contents
    },
    ...blogByCategoryData
  ]

  return {
    props: {
      blogs: blogsDataAll,
      categories: categoriesData.contents
    }
  }
}
