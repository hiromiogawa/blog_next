import styled from 'styled-components'

export type FlexColsType = {
  tag?: React.ElementType
  col?: number
  gap: number
  children: React.ReactNode
}

const FlexCols = ({
  tag = 'ul',
  col,
  gap,
  children,
  ...props
}: FlexColsType) => {
  return (
    <StyledFlexCols as={tag} col={col} gap={gap} {...props}>
      {children}
    </StyledFlexCols>
  )
}

export default FlexCols

const StyledFlexCols = styled.ul<Pick<FlexColsType, 'col' | 'gap'>>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: wrap;

  > * {
    width: ${({ gap, col }) =>
      col ? `calc((100% - (${gap}px * ${col - 1})) / ${col})` : 'auto'};
  }
`
