import styled from 'styled-components'
import Link from 'next/link'

export type PropTypes = {
  href: string
  children: string
}

const Button1 = ({ href = '', children = '', ...props }) => {
  return (
    <StyledButton1 {...props}>
      <Link href={href}>
        <span>{children}</span>
      </Link>
    </StyledButton1>
  )
}

export default Button1

const StyledButton1 = styled.div`
  font-family: 'Raleway';
  border: solid 1px #00ae95;
  width: 170px;
  line-height: 1;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: -5px 5px 0px 0px rgba(0, 174, 149, 1);
  margin: 0 0 5px 5px;
  transition: transform 0.5s box-shadow 0.5s;

  &:hover {
    transform: translate(-5px, 5px);
    box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
  }
  a {
    position: relative;
    display: block;
    padding: 11px 18.5px;
    background-color: #fff;
    overflow: hidden;
    font-size: 20px;
    text-align: center;

    span {
      position: relative;
      z-index: 3;
      color: #00ae95;
      transition: color 0.6s;
      font-family: 'Bungee Shade';
    }
  }
`
