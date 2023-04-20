import styled from 'styled-components'

// hooks
import { useRef } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'

// componets
import MaskAnimation from '@/components/animation/MaskAnimation'
import TagText, { TagTextType } from '@/components/atoms/text/TagText'

export type TagCardType = TagTextType

const TagCard = ({ id, children, ...props }: TagCardType) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)

  return (
    <div ref={elementsRef} {...props}>
      <MaskAnimation trigger={inView} backgroundColor="#00AE95">
        <StyledTagCard id={id}>{children}</StyledTagCard>
      </MaskAnimation>
    </div>
  )
}

export default TagCard

const StyledTagCard = styled(TagText)`
  display: inline-block;
  font-size: 12px;
  padding: 8px;
  background-color: #fff;
  border-radius: 12px;
  border: solid 3px #00ae95;
  margin: 0 0 3px 3px;
  box-shadow: -3px 3px 0px 0px rgba(0, 174, 149, 1);

  &:hover {
    transform: translate(-3px, 3px);
    box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
  }
`
