import styled from 'styled-components'

// components
import Card, { CardType } from './Card'

export type CardListType = {
  CardListData: CardType[]
}

const VerticalCardList = ({ CardListData, ...props }: CardListType) => {
  return (
    <StyledUl {...props}>
      {CardListData.map((CardData) => (
        <li key={CardData.title}>
          <Card {...CardData} vertical />
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
