import styled from 'styled-components'

// components
import Link from 'next/link'
import Image from 'next/image'
import Heading1 from '@/components/atoms/text/Heading1'
import TagText from '@/components/atoms/text/TagText'

import SideCategories, {
  SideCategoriesType
} from '@/components/organisms/SideCategories'

import ImgLinkSmall from '@/components/atoms/img/ImgCardSmall'

// types
import type { TagType } from '@/types'

export type SideContentsType = {
  tags: Pick<TagType, 'id' | 'name'>[]
} & SideCategoriesType

const SideContents = ({ categories, tags }: SideContentsType) => {
  return (
    <StyledAside>
      <SideCategories categories={categories} />
      <StyledTagsSection>
        <StyledHeading1>TAGS</StyledHeading1>
        <StyledTags>
          {tags.length > 0 &&
            tags.map((tag) => (
              <li key={tag.name}>
                <StyledTagText id={tag.id}>{tag.name}</StyledTagText>
              </li>
            ))}
        </StyledTags>
      </StyledTagsSection>
    </StyledAside>
  )
}

export default SideContents

const StyledAside = styled.aside`
  max-width: 176px;
  width: 100%;
  margin-left: 32px;
`

const StyledHeading1 = styled(Heading1)`
  font-size: 20px;
`

const StyledTagsSection = styled.section`
  margin-top: 40px;
`

const StyledTags = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const StyledTagText = styled(TagText)`
  display: inline-block;
  font-size: 12px;
  padding: 8px;
  background-color: #fff;
  border-radius: 12px;
  border: solid 1px #00ae95;
  box-shadow: -3px 3px 0px 0px rgba(0, 174, 149, 1);

  &:hover {
    transform: translate(-3px, 3px);
    box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
  }
`
