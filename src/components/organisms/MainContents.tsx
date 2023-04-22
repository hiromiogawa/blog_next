import styled from 'styled-components'

// functions
import mediaQuery from '@/styles/functions/mediaQuery'

type PropTypes = {
  tag?: React.ElementType
  children: React.ReactNode
}

const MainContents = ({ children, tag = 'main', ...props }: PropTypes) => {
  return (
    <StyledMain as={tag} {...props}>
      {children}
    </StyledMain>
  )
}

export default MainContents

const StyledMain = styled.main`
  max-width: 864px;
  padding: 0 32px;
  margin: 0 auto;
  width: 100%;

  ${mediaQuery('ct')} {
    padding: 0;
  }

  ${mediaQuery('tb')} {
  }
`
