import styled from 'styled-components'

// functions
import getCardListData from '@/functions/getCardListData'

// components
import Layout, { LayoutType } from '@/components/common/Layout'
import Heading1 from '@/components/atoms/text/Heading1'
import VerticalCardList from '@/components/organisms/VerticalCardList'
import PagiNation, { PagiNationType } from '@/components/molecules/PagiNation'

// types
import type { BlogType, CategoryType, TagType } from '@/types'

export type VerticalCardListsType = {
  blogs: BlogType[]
  title: string
} & PagiNationType &
  Pick<LayoutType, 'categories' | 'tags'>

const VerticalCardLists = ({
  blogs,
  title,
  categories,
  tags,
  totalCount,
  sortId
}: VerticalCardListsType) => {
  // blogsをcardListのデータに変換
  const cardListData = getCardListData(blogs)

  return (
    <Layout categories={categories} tags={tags}>
      <Heading1>{title}</Heading1>
      <StyledVerticalCardList cardListData={cardListData} />
      <StyledPaginate totalCount={totalCount} sortId={sortId} />
    </Layout>
  )
}

export default VerticalCardLists

const StyledVerticalCardList = styled(VerticalCardList)`
  margin-top: 24px;
`

const StyledPaginate = styled(PagiNation)`
  margin-top: 40px;
`
