import styled from 'styled-components'
import { Device } from '@/styles/vars'

type PropTypes = {
  children: React.ReactNode
}

const Contents = ({ children, ...props }: PropTypes) => {
  return <Scontents {...props}>{children}</Scontents>
}

export default Contents

const pcCtsPadding = 40

const Scontents = styled.div`
  max-width: ${Device.ct + pcCtsPadding * 2}px;
  padding: 0 ${pcCtsPadding}px;
  margin: 0 auto;
  width: 100%;
`
