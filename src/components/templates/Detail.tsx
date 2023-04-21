import styled from 'styled-components'
import { Device } from '@/styles/vars'

// functions
import mediaQuery from '@/styles/functions/mediaQuery'

// components
import Layout, { LayoutType } from '@/components/common/Layout'
import DetailMeta from '@/components/organisms/DetailMeta'
import DetailContent from '@/components/organisms/DetailContent'
import Html from '@/components/elements/Html'
import DetailRelated from '@/components/organisms/DetailRelated'

// types
import type { BlogType } from '@/types'

export type DetailType = {
  blog: BlogType
} & Pick<LayoutType, 'categories' | 'tags'>

const Detail = ({ blog, categories, tags }: DetailType) => {
  return (
    <Layout categories={categories} tags={tags}>
      <StyledDetail>
        <DetailMeta {...blog} />
        <StyledDetailContent>
          <Html>{blog.content}</Html>
        </StyledDetailContent>
      </StyledDetail>
      <StyledDetailRelated blogs={blog.connections} />
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

const StyledDetailContent = styled(DetailContent)`
  margin-top: 40px;
`

const StyledDetailRelated = styled(DetailRelated)`
  margin-top: 80px;
`
