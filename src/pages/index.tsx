import styled, { css } from 'styled-components'
import {
  getBlogs,
  getCategories,
  getBlogsByCategory
} from '@/functions/getData'
import convertDateFormat from '@/functions/convertDataFormat'

// hooks
import { useRef } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'

// components
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/common/Layout'
import Contents from '@/components/common/Contents'
import Button1 from '@/components/atoms/button/Button1'
import MaskAnimation from '@/components/animation/MaskAnimation'
import Card from '@/components/molecules/Card'

import CardList from '@/components/organisms/CardList'

import { IconContext } from 'react-icons'
import { AiFillTag } from 'react-icons/ai'

// types
import type { BlogType, CategoryType } from '@/types'

type PropTypes = {
  blogs: {
    categoryName: string
    categoryId: string
    data: Pick<BlogType, 'id' | 'category' | 'createdAt' | 'title' | 'tags'>[]
  }[]
  categories: Pick<CategoryType, 'id' | 'name'>[]
}
const Home = ({ blogs, categories }: PropTypes) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  return (
    <Layout>
      <Contents>
        {blogs.map((blogData) => {
          if (blogData.data.length === 0) return null
          return (
            <section key={blogData.categoryName}>
              <StyledHeading>{blogData.categoryName}</StyledHeading>
              <CardList CardListData={blogData.data} />
              <Button1
                href={`/blog${
                  blogData.categoryId === 'new' ? '' : `/${blogData.categoryId}`
                }/1`}
              >
                more
              </Button1>
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
      </Contents>
    </Layout>
  )
}

export default Home

const StyledHeading = styled.h1`
  font-family: 'Bungee Shade';
  color: #00ae95;
  font-size: 32px;
`

const StyledCardList = styled.ul<{ wrap: boolean }>`
  ${({ wrap }) =>
    wrap &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 24px;

      > li {
        width: calc((100% - (24px * 2)) / 3);
      }
    `}
`

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogsData = await getBlogs(3)
  const categoriesData = await getCategories()
  const blogByCategoryData = await Promise.all(
    categoriesData.contents.map(async (category: CategoryType) => {
      const result: { contents: BlogType[] } = await getBlogsByCategory(
        category.id,
        9
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
