import styled from 'styled-components'

// components
import Heading1 from '@/components/atoms/text/Heading1'
import SlideCardList, {
  SlideCardListType
} from '@/components/organisms/SlideCardList'
import Button1 from '@/components/atoms/button/Button1'

// functions
import mediaQuery from '@/styles/functions/mediaQuery'

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
  showCategory,
  ...props
}: SlideBlogListType) => {
  return (
    <section {...props}>
      <Heading1>{title}</Heading1>
      <StyledSlideCardList
        cardListData={blogsData}
        showCategory={showCategory}
      />
      <StyledButton1 href={listHref}>more</StyledButton1>
    </section>
  )
}

export default SlideBlogList

const StyledSlideCardList = styled(SlideCardList)`
  margin-top: 24px;
`

const StyledButton1 = styled(Button1)`
  margin-top: 24px;

  ${mediaQuery('tb')} {
    text-align: center;
  }
`
