import styled from 'styled-components'

// functions
import convertDateFormat from '@/functions/convertDataFormat'

// hooks
import { useRef } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'

// context
import { IconContext } from 'react-icons'

// components
import Link from 'next/link'
import MaskAnimation from '@/components/animation/MaskAnimation'
import CardHeader from '@/components/molecules/CardHeader'
import Heading2 from '@/components/atoms/text/Heading2'
import { AiFillTag } from 'react-icons/ai'

import CategoryText from '@/components/atoms/text/Categorytext'

// type
import type { BlogType } from '@/types'

// Propsの型宣言
export type CardType = Pick<
  BlogType,
  'id' | 'category' | 'createdAt' | 'title' | 'tags'
> & {
  showCategory?: boolean
}

// 一覧のCardコンポーネント
const Card = ({
  id,
  category,
  createdAt,
  title,
  tags,
  showCategory = true
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
            <StyledHeading2>{title}</StyledHeading2>
          </Link>
          {tags.length !== 0 && (
            <footer>
              {showCategory && (
                <StyledCategoryText id={category.id}>
                  {category.name}
                </StyledCategoryText>
              )}

              <StyledTags>
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <StyledTag href={`/blog/tag/${tag.id}/1`}>
                      #{tag.name}
                    </StyledTag>
                  </li>
                ))}
              </StyledTags>
            </footer>
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
  border: solid 1px #00ae95;
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

const StyledCategoryText = styled(CategoryText)`
  margin-top: 12px; // atomsになった際に削除
`
const StyledCategoryLink = styled(Link)`
  color: #000;

  &:hover {
    color: #00ae95;
  }
`

const StyledTags = styled.ul`
  margin-top: 8px; // atomsになった際に削除
  font-size: 12px;
  display: flex;
  gap: 4px;
  position: relative;
`

const StyleAiFillTag = styled(AiFillTag)`
  margin-right: 4px;
`

const StyledTag = styled(Link)`
  color: #000;

  &:hover {
    color: #00ae95;
  }
`
