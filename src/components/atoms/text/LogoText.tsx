import styled from 'styled-components'
import Link from 'next/link'

export type LogoTextType = {
  children: string
}

const LogoText = ({ children }: LogoTextType) => {
  return (
    <StyledLogoText>
      <Link href="/">{children}</Link>
    </StyledLogoText>
  )
}

export default LogoText

const StyledLogoText = styled.h1`
  font-size: 32px;
  font-family: 'Bungee Shade';

  a {
    color: #fff;
    &:hover {
      opacity: 0.7;
    }
  }
`
