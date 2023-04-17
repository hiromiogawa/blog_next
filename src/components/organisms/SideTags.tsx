import styled from 'styled-components'

// components
import Heading1 from '@/components/atoms/text/Heading1'
import FlexCols from '@/components/molecules/FlexCols'
import TagCard from '@/components/atoms/text/TagCard'

// type
import type { TagType } from '@/types'

export type SideTagsType = {
  tags: Pick<TagType, 'id' | 'name'>[]
}

const SideTags = ({ tags, ...props }: SideTagsType) => {
  return (
    <section {...props}>
      <StyledHeading1>TAGS</StyledHeading1>
      <StyledFlexCols gap={6}>
        {tags.length > 0 &&
          tags.map((tag) => (
            <li key={tag.name}>
              <TagCard id={tag.id}>{tag.name}</TagCard>
            </li>
          ))}
      </StyledFlexCols>
    </section>
  )
}

export default SideTags

const StyledHeading1 = styled(Heading1)`
  font-size: 20px;
`
const StyledFlexCols = styled(FlexCols)`
  margin-top: 16px;
`
