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
import { AiFillTag } from 'react-icons/ai'

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
          <header>
            <p>
              <StyledTime>{convertDateFormat(createdAt)}</StyledTime>
            </p>
          </header>
          <Link href={`/blog/detail/${id}`}>
            <StyledTitle>{title}</StyledTitle>
          </Link>
          {tags.length !== 0 && (
            <footer>
              {showCategory && (
                <StyledCategory>
                  <IconContext.Provider
                    value={{ color: '#00ae95', size: '8px' }}
                  >
                    <StyledCategoryLink
                      href={`/blog/category/${category.id}/1`}
                    >
                      <StyleAiFillTag />
                      {category.name}
                    </StyledCategoryLink>
                  </IconContext.Provider>
                </StyledCategory>
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

const StyledTime = styled.time`
  color: #333;
  font-size: 12px;
`

const StyledTitle = styled.h2`
  margin-top: 12px; // atomsになった際に削除
  color: #000;
  font-size: 16px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledCategory = styled.p`
  margin-top: 12px; // atomsになった際に削除
  font-size: 14px;
  position: relative;
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
