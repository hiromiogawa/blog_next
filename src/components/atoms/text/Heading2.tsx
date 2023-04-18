import styled, { css } from 'styled-components'
import Text from '@/components/elements/Text'

export type Heading2Type = {
  tag?: React.ElementType
  children: string
  vertical?: boolean
}

const Heading2 = ({
  tag,
  children,
  vertical = false,
  ...props
}: Heading2Type) => {
  return (
    <StyledHeading as={tag} {...props} vertical={vertical}>
      <Text>{children}</Text>
    </StyledHeading>
  )
}

export default Heading2

const StyledHeading = styled.h2<Pick<Heading2Type, 'vertical'>>`
  color: #000;
  font-size: 16px;
  line-height: 1.4;
  ${({ vertical }) =>
    !vertical &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`
