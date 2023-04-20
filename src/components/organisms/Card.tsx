import styled from 'styled-components'

// hooks
import { useRef } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'

// components
import Link from 'next/link'
import MaskAnimation from '@/components/animation/MaskAnimation'
import CardHeader from '@/components/molecules/CardHeader'
import Heading2, { Heading2Type } from '@/components/atoms/text/Heading2'
import CardFooter, { CardFooterType } from '@/components/molecules/CardFooter'

// type
import type { BlogType } from '@/types'

// Propsの型宣言
export type CardType = Pick<
  BlogType,
  'id' | 'category' | 'createdAt' | 'title' | 'tags'
> &
  Pick<CardFooterType, 'showCategory'> &
  Pick<Heading2Type, 'vertical'>

// 一覧のCardコンポーネント
const Card = ({
  id,
  category,
  createdAt,
  title,
  tags,
  showCategory = true,
  vertical = false
}: CardType) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  return (
    <div ref={elementsRef}>
      <MaskAnimation trigger={inView} backgroundColor="#00AE95">
        <StyledCard>
          <StyledCardLink href={`/blog/detail/${id}`} />
          <CardHeader createdAt={createdAt} />
          <Link href={`/blog/detail/${id}`}>
            <StyledHeading2 vertical={vertical}>{title}</StyledHeading2>
          </Link>
          {(tags.length !== 0 || showCategory) && (
            <StyledCardFooter
              tags={tags}
              category={category}
              showCategory={showCategory}
            />
          )}
        </StyledCard>
      </MaskAnimation>
    </div>
  )
}

export default Card

const StyledCard = styled.article`
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  padding: 16px;
  border: solid 3px #00ae95;
  box-shadow: -5px 5px 0px 0px rgba(0, 174, 149, 1);
  margin: 0 0 5px 5px;
  transition: transform 0.5s box-shadow 0.5s;
  font-family: 'Zen Maru Gothic', sans-serif;

  &:hover {
    transform: translate(-5px, 5px);
    box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
  }
`

const StyledCardLink = styled(Link)`
  position: absolute;
  inset: 0;
`

const StyledHeading2 = styled(Heading2)`
  margin-top: 12px;
`

const StyledCardFooter = styled(CardFooter)`
  margin-top: 12px;
`
