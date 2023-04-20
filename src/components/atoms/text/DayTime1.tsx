import styled from 'styled-components'

// functions
import convertDateFormat from '@/functions/convertDataFormat'

export type DayTime1Type = {
  tag?: React.ElementType
  children: string
}

const DayTime1 = ({ children, ...props }: DayTime1Type) => {
  return <StyledTime {...props}>{convertDateFormat(children)}</StyledTime>
}

export default DayTime1

const StyledTime = styled.time`
  color: #333;
  font-size: 12px;
`
