import styled from 'styled-components'

// functions
import getCardListData from '@/functions/getCardListData'

// components
import Layout from '@/components/common/Layout'
import VerticalCardList from '@/components/organisms/VerticalCardList'
import PagiNation, { PagiNationType } from '@/components/molecules/PagiNation'

// types
import type { BlogType, CategoryType, TagType } from '@/types'

export type VerticalCardListsType = {
  blogs: BlogType[]
  categories: CategoryType[]
  tags: TagType[]
} & PagiNationType

const VerticalCardLists = ({
  blogs,
  categories,
  tags,
  totalCount,
  sortId
}: VerticalCardListsType) => {
  // blogsをcardListのデータに変換
  const cardListData = getCardListData(blogs)

  return (
    <Layout categories={categories} tags={tags}>
      <VerticalCardList cardListData={cardListData} />
      <StyledPaginate totalCount={totalCount} sortId={sortId} />
    </Layout>
  )
}

export default VerticalCardLists

const StyledPaginate = styled(PagiNation)`
  margin-top: 40px;
`
