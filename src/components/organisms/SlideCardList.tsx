import styled from 'styled-components'

// components
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Card, { CardType } from './Card'

// css
import '@splidejs/react-splide/css/core'

export type SlideCardListType = {
  cardListData: CardType[]
  showCategory?: boolean
}

const SlideCardList = ({
  cardListData,
  showCategory = true,
  ...props
}: SlideCardListType) => {
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
    display: flex;
    align-items: center;
    justify-content: center;
    top: calc(50% - 8px);
    width: 16px;
    height: 16px;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    background-color: #fff;
    border: solid 1px #00ae95;
    border-radius: 12px;
    box-shadow: -2px 2px 0px 0px rgba(0, 174, 149, 1);
    margin: 0 0 2px 2px;
    transition: transform 0.5s box-shadow 0.5s;

    &::after {
      content: '';
      display: inline-block;
      width: 4.5px;
      height: 4.5px;
      border-left: 1px solid #00ae95;
      border-bottom: 1px solid #00ae95;
      transform: rotate(45deg);
      margin-right: -2px;
    }
    svg {
      display: none;
    }

    &--prev {
      left: -24px;

      &:hover {
        transform: translate(-2px, 2px);
        box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
      }
    }

    &--next {
      right: -24px;
      transform: rotate(180deg);
      box-shadow: 2px -2px 0px 0px rgba(0, 174, 149, 1);

      &:hover {
        transform: rotate(180deg) translate(2px, -2px);
        box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
      }
    }
  }
`
