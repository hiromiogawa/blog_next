import styled, { css } from 'styled-components'
import { MAX_LIMIT } from '@/config'

import type { ParsedUrlQuery } from 'node:querystring'

// functions
import { getBlog, getBlogs, getCategories, getTags } from '@/functions/getData'

// components
import Layout, { LayoutType } from '@/components/common/Layout'
import Html from '@/components/elements/Html'

// types
import type { GetStaticProps } from 'next'
import type { BlogType, ResDataType } from '@/types'

/** 一覧ページのgetStaticPropsで使用するcontext型宣言 */
type ParamsType = ParsedUrlQuery & {
  id: string
}

export type PropTypes = {
  blog: BlogType
} & LayoutType

const Detail = ({ blog, categories, tags }: PropTypes) => {
  return (
    <Layout categories={categories} tags={tags}>
      <StyledContent>
        <Html>{blog.content}</Html>
      </StyledContent>
    </Layout>
  )
}

export default Detail

const StyledContent = styled.div`
  > * {
    line-height: 1.6;

    &:first-child {
      margin-top: 0 !important;
    }

    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  font-family: 'Zen Maru Gothic', sans-serif;
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

    & + * {
      margin-top: 24px;
    }
  }

  h2 {
    margin-top: 48px;
    font-size: 28px;
    border-bottom: double 5px #00ae95;
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
  }

  h4 {
    margin-top: 24px;
    font-size: 20px;
    border-bottom: solid 3px #00ae95;
  }

  h5 {
    margin-top: 20px;
    font-size: 18px;
    color: #00ae95;
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
