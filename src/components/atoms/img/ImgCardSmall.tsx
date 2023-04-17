import styled from 'styled-components'

// components
import Link, { LinkProps } from 'next/link'
import Image, { ImageProps } from 'next/image'

export type ImgCardSmallType = Pick<LinkProps, 'href'> &
  Pick<ImageProps, 'src' | 'alt' | 'width' | 'height'>

const ImgCardSmall = ({ href, src, alt, width, height }: ImgCardSmallType) => {
  return (
    <StyledLink href={href}>
      <StyledImageWrap>
        <StyledImage src={src} alt={alt} width={width} height={height} />
      </StyledImageWrap>
    </StyledLink>
  )
}

export default ImgCardSmall

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  background: #fff;
  border-radius: 12px;
  border: solid 1px #00ae95;
  box-shadow: -3px 3px 0px 0px rgba(0, 174, 149, 1);

  &:hover {
    transform: translate(-3px, 3px);
    box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
  }
`

const StyledImageWrap = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
