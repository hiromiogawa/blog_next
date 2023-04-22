import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

// functions
import mediaQuery from '@/styles/functions/mediaQuery'

// context
import { SearchProvider } from '../providers/SearchProvider'

// components
import HeaderContents from '@/components/organisms/HeaderContents'
import Contents from '@/components/common/Contents'
import MainContents from '@/components/organisms/MainContents'
import SideContents, {
  SideContentsType
} from '@/components/organisms/SideContents'
import FooterContents from '@/components/organisms/FooterContents'

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

export type LayoutType = {
  children: React.ReactNode
} & SideContentsType

const Layout = ({ children, categories, tags }: LayoutType) => {
  return (
    <>
      <GlobalStyle />
      <SearchProvider>
        <HeaderContents />
        <StyledContents>
          <MainContents>{children}</MainContents>
          <SideContents categories={categories} tags={tags} />
        </StyledContents>
        <FooterContents />
      </SearchProvider>
    </>
  )
}

export default Layout

const StyledContents = styled(Contents)`
  display: flex;
  justify-content: center;
  margin-top: 56px;

  ${mediaQuery('ct')} {
    display: block;
  }
`
