import styled, { css, keyframes } from 'styled-components'
import { AnimationType } from '@/styles/types'

type PropTypes = {
  trigger: boolean
  children: React.ReactNode
  backgroundColor: string
} & AnimationType

const MaskAnimation = ({
  trigger = false,
  delay = 0,
  duration = 0.6,
  fillMode = 'forwards',
  children = '',
  backgroundColor,
  ...props
}: PropTypes) => {
  return (
    <StyledMaskOuter {...props}>
      {children}
      <StyledMask
        trigger={trigger}
        delay={delay}
        duration={duration}
        fillMode={fillMode}
        backgroundColor={backgroundColor}
      />
    </StyledMaskOuter>
  )
}

export default MaskAnimation

const StyledMaskOuter = styled.div`
  position: relative;
  overflow: hidden;
`

const StyledMask = styled.div<
  { trigger: boolean } & AnimationType & { backgroundColor: string }
>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
  transform: translateX(0);
  ${({ trigger, fillMode, duration, delay }) =>
    trigger &&
    css`
      animation: ${mask} ${duration ? duration : 0.6}s
        ${fillMode ? fillMode : 'forwards'} ${delay ? delay : 0}s;
    `}
  z-index: 999;
`

const mask = keyframes`
  0% {
    transform: translateX(0);
	}

  50% {
    transform: translateX(100%);
	}

	100% {
    transform: translateX(100%);
  }
`
