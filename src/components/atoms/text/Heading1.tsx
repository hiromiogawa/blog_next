import styled from 'styled-components'
import Text from '@/components/elements/Text'

export type Heading1Type = {
  tag?: React.ElementType
  children: string
}

const Heading1 = ({ tag, children, ...props }: Heading1Type) => {
  return (
    <StyledHeading as={tag} {...props}>
      <Text>{children}</Text>
    </StyledHeading>
  )
}

export default Heading1

const StyledHeading = styled.h1`
  font-family: 'Bungee Shade';
  color: #00ae95;
  font-size: 32px;
`
