import styled, { css } from 'styled-components'
import {
  getBlogs,
  getCategories,
  getBlogsByCategory
} from '@/functions/getData'
import convertDateFormat from '@/functions/convertDataFormat'

// コンポーネント
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/common/Layout'
import Contents from '@/components/common/Contents'
import Button1 from '@/components/atoms/button/Button1'

import { IconContext } from 'react-icons'
import { AiFillTag } from 'react-icons/ai'

// タイプ
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
  return (
    <Layout>
      <Contents>
        {blogs.map((blogData) => {
          if (blogData.data.length === 0) return null
          return (
            <section key={blogData.categoryName}>
              <h1>{blogData.categoryName}</h1>
              <StyledCardList wrap={blogData.categoryName === 'New'}>
                {blogData.data.map((blog) => (
                  <li key={blog.title}>
                    <StyledCard>
                      <StyledCardLink href={`/blog/detail/${blog.id}`} />
                      <header>
                        <p>
                          <StyledTime>
                            {convertDateFormat(blog.createdAt)}
                          </StyledTime>
                        </p>
                      </header>
                      <Link href={`/blog/detail/${blog.id}`}>
                        <StyledTitle>{blog.title}</StyledTitle>
                      </Link>
                      {blog.tags.length !== 0 && (
                        <footer>
                          <StyledCategory>
                            <IconContext.Provider
                              value={{ color: '#ccc', size: '12px' }}
                            >
                              <StyledCategoryLink
                                href={`/blog/${blog.category.id}/1`}
                              >
                                <StyleAiFillTag />
                                {blog.category.name}
                              </StyledCategoryLink>
                            </IconContext.Provider>
                          </StyledCategory>

                          <StyledTags>
                            {blog.tags.map((tag) => (
                              <li key={tag.name}>
                                <StyledTag href={`/blog/${tag.id}/1`}>
                                  #{tag.name}
                                </StyledTag>
                              </li>
                            ))}
                          </StyledTags>
                        </footer>
                      )}
                    </StyledCard>
                  </li>
                ))}
              </StyledCardList>
              <Button1
                href={`/blog${
                  blogData.categoryId === 'new' ? '' : `/${blogData.categoryId}`
                }/1`}
              >
                view more
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

const StyledCard = styled.article`
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  padding: 16px;
`

const StyledCardLink = styled(Link)`
  position: absolute;
  inset: 0;
`

const StyledTime = styled.time`
  color: #333;
  font-size: 12px;
`

const StyledTitle = styled.h2`
  margin-top: 12px; // atomsになった際に削除
  color: #000;
  font-size: 16px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledCategory = styled.p`
  margin-top: 12px; // atomsになった際に削除
  font-size: 14px;
`
const StyledCategoryLink = styled(Link)`
  color: #000;
`

const StyledTags = styled.ul`
  margin-top: 8px; // atomsになった際に削除
  font-size: 12px;
  display: flex;
  gap: 4px;
  position: relative;
`

const StyleAiFillTag = styled(AiFillTag)`
  margin-right: 4px;
`

const StyledTag = styled(Link)`
  color: #000;
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
