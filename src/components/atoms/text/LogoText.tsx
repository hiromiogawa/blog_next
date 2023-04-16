import styled from 'styled-components'

export type LogoTextType = {
  children: string
}

const LogoText = ({ children }: LogoTextType) => {
  return <StyledLogoText>{children}</StyledLogoText>
}

export default LogoText

const StyledLogoText = styled.h1`
  font-size: 32px;
  font-family: 'Bungee Shade';
  color: #fff;
`
