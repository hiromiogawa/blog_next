import styled from 'styled-components'

// components
import TagText from '@/components/atoms/text/TagText'

// type
import { TagType } from '@/types'

export type TagListType = {
  tags: Pick<TagType, 'name' | 'id'>[]
}

const TagList = ({ tags, ...props }: TagListType) => {
  if (tags.length === 0) return null
  return (
    <StyledTagList {...props}>
      {tags.map((tag) => (
        <li key={tag.name}>
          <TagText id={tag.id}>{tag.name}</TagText>
        </li>
      ))}
    </StyledTagList>
  )
}

export default TagList

const StyledTagList = styled.ul`
  font-size: 12px;
  display: flex;
  gap: 4px;
  position: relative;
`
