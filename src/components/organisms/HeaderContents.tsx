import styled from 'styled-components'

// components
import Contents from '@/components/common/Contents'

const HeaderContents = () => {
  return (
    <StyledHeader>
      <Contents>
        <StyledH1>HIROBLOG</StyledH1>
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

const StyledH1 = styled.h1`
  font-size: 32px;
  font-family: 'Bungee Shade';
  color: #fff;
`
