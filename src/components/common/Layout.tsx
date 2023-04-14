import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

// components
import Header from '@/components/organisms/Header'

const GlobalStyle = createGlobalStyle`
    ${reset}
    /* other styles */
    *, *::after, *::before {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body {
      background-color: #f5f6f6
    }
`

type PropTypes = {
  children: React.ReactNode
}

const Layout = ({ children }: PropTypes) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  )
}

export default Layout

const StyledMain = styled.main`
  margin-top: 56px;
`
