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
  border-radius: 24px;
  width: 170px;
  line-height: 1;
  overflow: hidden;

  a {
    position: relative;
    display: block;
    padding: 11px 18.5px;
    background-color: #fff;
    overflow: hidden;

    span {
      position: relative;
      z-index: 3;
      color: #00ae95;
      transition: color 0.6s;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      background: #00ae95;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.8, 0, 0.2, 1) 0s;
      transform: scale(0, 1);
      transform-origin: right top;
    }

    &:hover {
      span {
        color: #fff;
      }

      &::before {
        transform-origin: left top;
        transform: scale(1, 1);
      }
    }

    span {
      display: block;
      position: relative;
      text-align: center;
    }
  }
`
