import styled from 'styled-components'
import { MAX_LIMIT } from '@/config'
import { Device } from '@/styles/vars'

// hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// functions
import { getBlog, getBlogs, getCategories, getTags } from '@/functions/getData'
import mediaQuery from '@/styles/functions/mediaQuery'
import getCardListData from '@/functions/getCardListData'

// components
import Layout, { LayoutType } from '@/components/common/Layout'
import ContentsHead from '@/components/common/ContentsHead'
import DayTime1 from '@/components/atoms/text/DayTime1'
import TagList from '@/components/molecules/TagList'
import CategoryText from '@/components/atoms/text/CategoryText'
import Html from '@/components/elements/Html'
import Heading1 from '@/components/atoms/text/Heading1'
import SlideCardList from '@/components/organisms/SlideCardList'
import VerticalCardList from '@/components/organisms/VerticalCardList'

// types
import type { GetStaticProps } from 'next'
import type { BlogType, ResDataType } from '@/types'
import type { ParsedUrlQuery } from 'node:querystring'

/** 一覧ページのgetStaticPropsで使用するcontext型宣言 */
type ParamsType = ParsedUrlQuery & {
  id: string
}

export type PropTypes = {
  blog: BlogType
} & LayoutType

const Detail = ({ blog, categories, tags }: PropTypes) => {
  const isTb = useMediaQuery('tb')
  const cardListData = getCardListData(blog.connections)

  return (
    <Layout categories={categories} tags={tags}>
      <ContentsHead title={`${blog.title} | `} />
      <StyledDetail>
        <StyledMeta>
          <StyledCategoryText size="12px" id={blog.category.id}>
            {blog.category.name}
          </StyledCategoryText>
          <StyledDay>
            <li>
              投稿日: <StyledDayTime1>{blog.createdAt}</StyledDayTime1>
            </li>
            <li>
              更新日: <StyledDayTime1>{blog.updatedAt}</StyledDayTime1>
            </li>
          </StyledDay>
          <StyledTitle>{blog.title}</StyledTitle>
          <StyledTagList tags={blog.tags} />
        </StyledMeta>

        <StyledContent>
          <Html>{blog.content}</Html>
        </StyledContent>
      </StyledDetail>

      <StyledRelated>
        <StyledHeading1>Related article</StyledHeading1>
        {isTb ? (
          <StyledVerticalCardList
            showFooter={false}
            cardListData={cardListData}
          />
        ) : (
          <StyledSlideCardList showFooter={false} cardListData={cardListData} />
        )}
      </StyledRelated>
    </Layout>
  )
}

export default Detail

const StyledDetail = styled.section`
  font-family: 'Zen Maru Gothic', sans-serif;
  background-color: #fff;
  margin: 0 -32px;
  padding: 32px;
  border-radius: 12px;
  border: solid 3px #00ae95;
  ${mediaQuery(Device.tb)} {
    margin: 0 -16px;
  }
`

const StyledTitle = styled.h1`
  margin-top: 8px;
  font-size: 32px;
  background: #00ae95;
  color: #fff;
  padding: 10px;
  border-radius: 12px;
  line-height: 1.4;

  ${mediaQuery(Device.tb)} {
    font-size: 28px;
    padding: 6px;
  }
`

const StyledMeta = styled.div`
  font-size: 16px;
`

const StyledDay = styled.ul`
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  margin-top: -1em;
  gap: 8px;
  ${mediaQuery(Device.tb)} {
    justify-content: flex-start;
    margin-top: 4px;
    font-size: 14px;
  }
  ${mediaQuery(Device.sp)} {
    display: block;

    > *:not(:first-child) {
      margin-top: 4px;
    }
  }
`

const StyledCategoryText = styled(CategoryText)`
  font-size: 16px;

  a {
    color: #00ae95;

    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledDayTime1 = styled(DayTime1)`
  font-size: 16px;
`

const StyledTagList = styled(TagList)`
  margin-top: 4px;
  font-size: 14x;

  a {
    color: #00ae95;

    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledContent = styled.div`
  margin-top: 40px;

  ${mediaQuery(Device.tb)} {
    margin-top: 32px;
  }
  > * {
    line-height: 1.6;

    &:first-child {
      margin-top: 0 !important;
    }

    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  /* 見出し */
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.4;
  }

  h1 {
    margin-top: 64px;
    font-size: 32px;
    background: #fff;
    padding: 10px;
    color: #00ae95;
    border-radius: 12px;
    border: solid 3px #00ae95;

    ${mediaQuery(Device.tb)} {
      font-size: 28px;
      padding: 6px;
    }

    & + * {
      margin-top: 24px;
    }
  }

  h2 {
    margin-top: 48px;
    font-size: 28px;
    border-bottom: double 5px #00ae95;
    ${mediaQuery(Device.tb)} {
      font-size: 24px;
    }

    & + * {
      margin-top: 20px;
    }
  }

  h3 {
    margin-top: 32px;
    font-size: 24px;
    padding: 4px 4px;
    color: #00ae95;
    background: transparent;
    border-left: solid 5px #00ae95;
    ${mediaQuery(Device.tb)} {
      font-size: 20px;
      padding: 2px 2px;
    }
  }

  h4 {
    margin-top: 24px;
    font-size: 20px;
    border-bottom: solid 3px #00ae95;
    ${mediaQuery(Device.tb)} {
      font-size: 18px;
    }
  }

  h5 {
    margin-top: 20px;
    font-size: 18px;
    color: #00ae95;
    ${mediaQuery(Device.tb)} {
      font-size: 16px;
    }
  }

  /* 段落 */
  p {
    font-size: 1rem;
  }

  p span {
    display: inline-block;
  }

  /* リスト */
  ol,
  ul {
    padding-left: 2rem;

    li {
      &:not(:first-child) {
        margin-top: 0.8em;
      }
    }
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: outside;
  }

  em {
    font-style: italic;
  }

  /* 引用 */
  blockquote {
    font-style: italic;
    background-color: #f1f1f1;
    border-left: 5px solid #ccc;
    padding: 1rem;
  }

  /* コード */

  code {
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    color: #660066;
  }

  pre {
    line-height: 1.4;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    padding: 1rem;
    overflow-x: auto;

    code {
      color: #fff;
    }
  }

  /* リンク */
  a {
    color: #00ae95;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* 画像 */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1rem auto;
  }

  sub,
  sup {
    font-size: 0.75em;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }
`

const StyledRelated = styled.section`
  margin-top: 80px;
`

const StyledHeading1 = styled(Heading1)`
  font-size: 20px;
`

const StyledVerticalCardList = styled(VerticalCardList)`
  margin-top: 24px;
`
const StyledSlideCardList = styled(SlideCardList)`
  margin-top: 24px;
`

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
