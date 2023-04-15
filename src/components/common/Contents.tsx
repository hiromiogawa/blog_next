import styled from 'styled-components'

type PropTypes = {
  children: React.ReactNode
}

const Contents = ({ children, ...props }: PropTypes) => {
  return <StyledContents {...props}>{children}</StyledContents>
}

export default Contents

const StyledContents = styled.main`
  max-width: 1264px;
  padding: 0 32px;
  margin: 0 auto;
  width: 100%;
`
