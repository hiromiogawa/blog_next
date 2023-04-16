import styled from 'styled-components'

// components
import Contents from '@/components/common/Contents'
import LogoText from '@/components/atoms/text/LogoText'

const HeaderContents = () => {
  return (
    <StyledHeader>
      <Contents>
        <LogoText>HIROBLOG</LogoText>
      </Contents>
    </StyledHeader>
  )
}

export default HeaderContents

const StyledHeader = styled.header`
  background-color: #00ae95;
  padding: 24px 0;
  box-shadow: 0px 5px 0px 0px #fff;
`
