import styled from 'styled-components'

// components
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Card, { CardType } from '../molecules/Card'

// css
import '@splidejs/react-splide/css/core'

export type CardListType = {
  slide?: boolean
  cardListData: CardType[]
  showCategory?: boolean
}

const SlideCardList = ({
  cardListData,
  showCategory = true,
  ...props
}: CardListType) => {
  return (
    <StyledSplidWrap {...props}>
      <Splide
        options={{
          rewind: true,
          perPage: 3,
          gap: '24px',
          pagination: false,
          drag: 'free',
          omitEnd: true,
          arrows: cardListData.length > 3
        }}
      >
        {cardListData.map((cardData) => (
          <SplideSlide key={cardData.title}>
            <Card {...cardData} showCategory={showCategory} />
          </SplideSlide>
        ))}
      </Splide>
    </StyledSplidWrap>
  )
}

export default SlideCardList

const StyledSplidWrap = styled.div`
  position: relative;

  .splide__arrow {
    position: absolute;
    top: calc(50% - 16px);
    width: 32px;
    height: 32px;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    background-color: #fff;
    border: solid 1px #00ae95;
    border-radius: 12px;
    box-shadow: -4px 4px 0px 0px rgba(0, 174, 149, 1);
    margin: 0 0 4px 4px;
    transition: transform 0.5s box-shadow 0.5s;

    &::after {
      content: '';
      display: inline-block;
      width: 9px;
      height: 9px;
      border-left: 2px solid #00ae95;
      border-bottom: 2px solid #00ae95;
      transform: rotate(45deg);
      margin-right: -4px;
    }
    svg {
      display: none;
    }

    &--prev {
      left: -48px;

      &:hover {
        transform: translate(-4px, 4px);
        box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
      }
    }

    &--next {
      right: -48px;
      transform: rotate(180deg);
      box-shadow: 4px -4px 0px 0px rgba(0, 174, 149, 1);

      &:hover {
        transform: rotate(180deg) translate(4px, -4px);
        box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
      }
    }
  }
`
