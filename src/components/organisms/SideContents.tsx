import styled from 'styled-components'
import { Device } from '@/styles/vars'

// funtions
import mediaQuery from '@/styles/functions/mediaQuery'

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

  ${mediaQuery(Device.ct)} {
    max-width: 864px;
    padding: 0;
    margin: 80px auto 0;
  }
`

const StyledSideTags = styled(SideTags)`
  margin-top: 40px;
`
