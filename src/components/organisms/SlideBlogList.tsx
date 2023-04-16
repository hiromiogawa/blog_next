import styled from 'styled-components'

// components
import SlideCardList, {
  SlideCardListType
} from '@/components/molecules/SlideCardList'
import Button1 from '@/components/atoms/button/Button1'

export type SlideBlogListType = {
  title: string
  blogsData: Pick<
    BlogType,
    'id' | 'category' | 'createdAt' | 'title' | 'tags'
  >[]
  listHref: string
} & Pick<SlideCardListType, 'showCategory'>

// types
import type { BlogType } from '@/types'

const SlideBlogList = ({
  title,
  blogsData,
  listHref,
  showCategory
}: SlideBlogListType) => {
  return (
    <StyledSection>
      <StyledHeading>{title}</StyledHeading>
      <StyledSlideCardList
        cardListData={blogsData}
        showCategory={showCategory}
      />
      <StyledButton1 href={listHref}>more</StyledButton1>
    </StyledSection>
  )
}

export default SlideBlogList

const StyledSection = styled.section``

const StyledHeading = styled.h1`
  font-family: 'Bungee Shade';
  color: #00ae95;
  font-size: 32px;
`

const StyledSlideCardList = styled(SlideCardList)`
  margin-top: 24px;
`

const StyledButton1 = styled(Button1)`
  margin-top: 24px;
`
