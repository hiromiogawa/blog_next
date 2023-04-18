import styled from 'styled-components'

// context
import { IconContext } from 'react-icons'

// components
import Link from 'next/link'
import { AiFillTag } from 'react-icons/ai'

// type
import type { CategoryType } from '@/types'

export type CategoryTextType = Pick<CategoryType, 'id'> & {
  children: CategoryType['name']
}

const CategoryText = ({ id, children, ...props }: CategoryTextType) => {
  return (
    <StyledCategory {...props}>
      <IconContext.Provider value={{ color: '#00ae95', size: '8px' }}>
        <StyledCategoryLink href={`/blog/category/${id}/1`}>
          <StyleAiFillTag />
          {children}
        </StyledCategoryLink>
      </IconContext.Provider>
    </StyledCategory>
  )
}

export default CategoryText

const StyledCategory = styled.p`
  font-size: 14px;
  position: relative;
  font-family: 'Zen Maru Gothic', sans-serif;
`
const StyledCategoryLink = styled(Link)`
  color: #000;

  &:hover {
    color: #00ae95;
  }
`

const StyleAiFillTag = styled(AiFillTag)`
  margin-right: 4px;
`
