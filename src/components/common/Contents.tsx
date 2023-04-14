import styled from 'styled-components'

type PropTypes = {
  children: React.ReactNode
}

const Contents = ({ children, ...props }: PropTypes) => {
  return <Scontents {...props}>{children}</Scontents>
}

export default Contents

const Scontents = styled.div`
  max-width: 1080px;
  padding: 0 40px;
  margin: 0 auto;
  width: 100%;
`
