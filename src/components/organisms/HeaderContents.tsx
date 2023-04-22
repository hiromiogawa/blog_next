import { useContext } from 'react'
import styled from 'styled-components'

// context
import { SearchContext } from '../providers/SearchProvider'

// components
import Contents from '@/components/common/Contents'
import LogoText from '@/components/atoms/text/LogoText'
import Input from '@/components/atoms/Input'

const HeaderContents = () => {
  const { keyword, setKeyword, handleClickSubmit } = useContext(SearchContext)
  return (
    <StyledHeader>
      <Contents>
        <LogoText>HIROBLOG</LogoText>
        <Input
          value={keyword}
          onChange={setKeyword}
          handleClickSubmit={handleClickSubmit}
        />
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
