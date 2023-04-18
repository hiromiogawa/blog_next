import styled from 'styled-components'

//components
import Contents from '@/components/common/Contents'

const FooterContents = ({ ...props }) => {
  return (
    <StyledFooter {...props}>
      <Contents>
        <StyledP>
          <small>@2023 hiroblgo</small>
        </StyledP>
      </Contents>
    </StyledFooter>
  )
}

export default FooterContents

const StyledFooter = styled.footer`
  padding: 24px 0;
  margin-top: 80px;
  background-color: #00ae95;
`

const StyledP = styled.p`
  color: #fff;
  text-align: center;
  font-size: 12px;
`
