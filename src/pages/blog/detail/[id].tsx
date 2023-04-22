import { MAX_LIMIT } from '@/config'

// functions
import { getBlog, getBlogs, getCategories, getTags } from '@/functions/getData'
import removeHtmlTags from '@/functions/removeHtmlTags'
import getFirstNChars from '@/functions/getFirstNChars'

// context
import { SearchProvider } from '@/components/providers/SearchProvider'

// components
import ContentsHead from '@/components/common/ContentsHead'
import Detail, { DetailType } from '@/components/templates/Detail'

// types
import type { GetStaticProps } from 'next'
import type { BlogType, ResDataType } from '@/types'
import type { ParsedUrlQuery } from 'node:querystring'

/** 一覧ページのgetStaticPropsで使用するcontext型宣言 */
type ParamsType = ParsedUrlQuery & {
  id: string
}

const DetailPage = ({ ...props }: DetailType) => {
  return (
    <SearchProvider>
      <ContentsHead
        title={`${props.blog.title} | `}
        description={getFirstNChars(removeHtmlTags(props.blog.content))}
      />
      <Detail {...props} />
    </SearchProvider>
  )
}

export default DetailPage

// 動的なページを作成
export const getStaticPaths = async () => {
  const blogs: { contents: BlogType[] } & ResDataType = await getBlogs(
    MAX_LIMIT
  )

  const paths = blogs.contents.map((blog) => `/blog/detail/${blog.id}`)

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps: GetStaticProps<DetailType, ParamsType> = async (
  context
) => {
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
