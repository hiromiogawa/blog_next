import styled from 'styled-components'

// hooks
import { useRef } from 'react'
import useScrollTrigger from '@/hooks/useScrollTrigger'

// components
import MaskAnimation from '@/components/animation/MaskAnimation'
import Link, { LinkProps } from 'next/link'
import Image, { ImageProps } from 'next/image'

export type ImgCardSmallType = Pick<LinkProps, 'href'> &
  Pick<ImageProps, 'src' | 'alt' | 'width' | 'height'>

const ImgCardSmall = ({
  href,
  src,
  alt,
  width,
  height,
  ...props
}: ImgCardSmallType) => {
  const elementsRef = useRef(null)
  const inView = useScrollTrigger(elementsRef)
  return (
    <div ref={elementsRef} {...props}>
      <MaskAnimation trigger={inView} backgroundColor="#00AE95">
        <StyledLink href={href}>
          <StyledImageWrap>
            <StyledImage src={src} alt={alt} width={width} height={height} />
          </StyledImageWrap>
        </StyledLink>
      </MaskAnimation>
    </div>
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
  margin: 0 0 3px 3px;
  border: solid 3px #00ae95;
  box-shadow: -3px 3px 0px 0px rgba(0, 174, 149, 1);

  &:hover {
    transform: translate(-3px, 3px);
    box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
  }
`

const StyledImageWrap = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
