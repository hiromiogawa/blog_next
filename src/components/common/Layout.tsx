import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

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
      <main>{children}</main>
    </>
  )
}

export default Layout
