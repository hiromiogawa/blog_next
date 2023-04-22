import { useContext } from 'react'
import styled from 'styled-components'

// hooks
import useMediaQuery from '@/hooks/useMediaQuery'

// context
import { SearchContext } from '../providers/SearchProvider'

// functions
import mediaQuery from '@/styles/functions/mediaQuery'

// components
import Contents from '@/components/common/Contents'
import LogoText from '@/components/atoms/text/LogoText'
import Input from '@/components/atoms/Input'

const HeaderContents = () => {
  const { keyword, setKeyword, handleClickSubmit } = useContext(SearchContext)

  const isTb = useMediaQuery('tb')

  return (
    <>
      <StyledHeader>
        <StyledContents>
          <LogoText>HIROBLOG</LogoText>
          {!isTb && (
            <StyledInput
              value={keyword}
              onChange={setKeyword}
              handleClickSubmit={handleClickSubmit}
              placeholder="Please enter a keyword"
            />
          )}
        </StyledContents>
      </StyledHeader>
      {isTb && (
        <StyledContents2>
          <StyledInput
            value={keyword}
            onChange={setKeyword}
            handleClickSubmit={handleClickSubmit}
            placeholder="Please enter a keyword"
          />
        </StyledContents2>
      )}
    </>
  )
}

export default HeaderContents

const StyledHeader = styled.header`
  background-color: #00ae95;
  padding: 24px 0;
  box-shadow: 0px 5px 0px 0px #fff;
`

const StyledContents = styled(Contents)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledInput = styled(Input)`
  width: 240px;
  ${mediaQuery('tb')} {
    width: 100%;
    border: solid 3px #00ae95;
  }
`

const StyledContents2 = styled(Contents)`
  margin-top: 24px;
`
