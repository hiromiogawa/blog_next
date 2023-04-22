import styled from 'styled-components'

// hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// functions
import getCardListData from '@/functions/getCardListData'

// components
import Heading1 from '@/components/atoms/text/Heading1'
import SlideCardList from '@/components/organisms/SlideCardList'
import VerticalCardList from '@/components/organisms/VerticalCardList'

// types
import type { BlogType } from '@/types'

export type DetailRelatedType = {
  blogs: BlogType[]
}

const DetailRelated = ({ blogs }: DetailRelatedType) => {
  const isTb = useMediaQuery('tb')
  const cardListData = getCardListData(blogs)

  return (
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
  )
}

export default DetailRelated

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
