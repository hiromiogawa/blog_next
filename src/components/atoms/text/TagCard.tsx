import styled from 'styled-components'

// componets
import TagText, { TagTextType } from '@/components/atoms/text/TagText'

export type TagCardType = TagTextType

const TagCard = ({ id, children, ...props }: TagCardType) => {
  return (
    <StyledTagCard {...props} id={id}>
      {children}
    </StyledTagCard>
  )
}

export default TagCard

const StyledTagCard = styled(TagText)`
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
