import styled from 'styled-components'

// components
import SideCategories, {
  SideCategoriesType
} from '@/components/organisms/SideCategories'

import SideTags, { SideTagsType } from '@/components/organisms/SideTags'

export type SideContentsType = SideCategoriesType & SideTagsType

const SideContents = ({ categories, tags }: SideContentsType) => {
  return (
    <StyledAside>
      <SideCategories categories={categories} />
      <StyledSideTags tags={tags} />
    </StyledAside>
  )
}

export default SideContents

const StyledAside = styled.aside`
  max-width: 176px;
  width: 100%;
  margin-left: 32px;
`

const StyledSideTags = styled(SideTags)`
  margin-top: 40px;
`
