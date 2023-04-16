import styled from 'styled-components'

// components
import Link from 'next/link'

// type
import type { TagType } from '@/types'

export type TagTextType = {
  children: TagType['name']
} & Pick<TagType, 'id'>

const TagText = ({ id, children, ...props }: TagTextType) => {
  return (
    <StyledTagText href={`/blog/tag/${id}/1`} {...props}>
      #{children}
    </StyledTagText>
  )
}

export default TagText

const StyledTagText = styled(Link)`
  color: #000;

  &:hover {
    color: #00ae95;
  }
`
