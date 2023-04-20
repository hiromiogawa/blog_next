import styled from 'styled-components'

// components
import Card, { CardType } from './Card'

export type VerticalCardListType = {
  cardListData: CardType[]
} & Pick<CardType, 'showFooter'>

const VerticalCardList = ({
  cardListData,
  showFooter = true,
  ...props
}: VerticalCardListType) => {
  return (
    <StyledUl {...props}>
      {cardListData.map((cardData) => (
        <li key={cardData.title}>
          <Card {...cardData} vertical showFooter={showFooter} />
        </li>
      ))}
    </StyledUl>
  )
}

export default VerticalCardList

const StyledUl = styled.ul`
  > li {
    &:not(:first-of-type) {
      margin-top: 24px;
    }
  }
`
