import styled, { css } from 'styled-components'
import {
  getBlogs,
  getCategories,
  getBlogsByCategory
} from '@/functions/getData'

// components
import Link from 'next/link'
import Image from 'next/image'
import Layout, { LayoutType } from '@/components/common/Layout'
import Button1 from '@/components/atoms/button/Button1'

import SlideCardList from '@/components/organisms/SlideCardList'

// types
import type { BlogType, CategoryType } from '@/types'

type PropTypes = {
  blogs: {
    categoryName: string
    categoryId: string
    data: Pick<BlogType, 'id' | 'category' | 'createdAt' | 'title' | 'tags'>[]
  }[]
} & LayoutType
const Home = ({ blogs, categories }: PropTypes) => {
  return (
    <Layout categories={categories}>
      {blogs.map((blogData, index) => {
        if (blogData.data.length === 0) return null
        return (
          <StyledSection key={blogData.categoryName} index={index}>
            <StyledHeading>{blogData.categoryName}</StyledHeading>
            <StyledSlideCardList
              cardListData={blogData.data}
              showCategory={blogData.categoryName === 'New' ? true : false}
            />
            <StyledButton1
              href={`/blog${
                blogData.categoryId === 'new'
                  ? ''
                  : `/category/${blogData.categoryId}`
              }/1`}
            >
              more
            </StyledButton1>
          </StyledSection>
        )
      })}
    </Layout>
  )
}

export default Home

const StyledSection = styled.section<{ index: number }>`
  ${({ index }) =>
    index > 0 &&
    css`
      margin-top: 80px;
    `}
`

const StyledHeading = styled.h1`
  font-family: 'Bungee Shade';
  color: #00ae95;
  font-size: 32px;
`

const StyledSlideCardList = styled(SlideCardList)`
  margin-top: 24px;
`

const StyledButton1 = styled(Button1)`
  margin-top: 24px;
`

const StyledAside = styled.aside``

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogsData = await getBlogs(9)
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
