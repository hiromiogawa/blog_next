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

const StyleAiFillTag = styled(AiFillTag)`
  margin-right: 4px;
`
