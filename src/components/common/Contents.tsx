import styled from 'styled-components'
import { Device } from '@/styles/vars'

// functions
import mediaQuery from '@/styles/functions/mediaQuery'

type PropTypes = {
  children: React.ReactNode
}

const Contents = ({ children, ...props }: PropTypes) => {
  return <StyledContents {...props}>{children}</StyledContents>
}

export default Contents

const StyledContents = styled.div`
  max-width: ${Device.ct}px;
  padding: 0 32px;
  margin: 0 auto;
  width: 100%;

  ${mediaQuery('tb')} {
    padding: 0 16px;
  }
`
