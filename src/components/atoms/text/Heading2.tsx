import styled from 'styled-components'
import Text from '@/components/elements/Text'

export type Heading2Type = {
  tag?: React.ElementType
  children: string
}

const Heading2 = ({ tag, children, ...props }: Heading2Type) => {
  return (
    <StyledHeading as={tag} {...props}>
      <Text>{children}</Text>
    </StyledHeading>
  )
}

export default Heading2

const StyledHeading = styled.h2`
  color: #000;
  font-size: 16px;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
