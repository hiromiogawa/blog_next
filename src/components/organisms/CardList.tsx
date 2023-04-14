import styled, { css } from 'styled-components'

// components
import Card, { CardType } from '../molecules/Card'

export type CardListType = {
  slide?: boolean
  CardListData: CardType[]
}

const CardList = ({ CardListData }: CardListType) => {
  return (
    <StyledCardList wrap={false}>
      {CardListData.map((CardData) => (
        <li key={CardData.title}>
          <Card {...CardData} />
        </li>
      ))}
    </StyledCardList>
  )
}

export default CardList

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
