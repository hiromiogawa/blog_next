import styled, { keyframes } from 'styled-components'

const LoadingSpinnerBox = ({ ...props }) => {
  return (
    <StyledSpinnerBox {...props}>
      <StyledCircleBorder>
        <StyledCircleCore></StyledCircleCore>
      </StyledCircleBorder>
    </StyledSpinnerBox>
  )
}

export default LoadingSpinnerBox

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
`

const StyledSpinnerBox = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

const StyledCircleBorder = styled.div`
  width: 50%;
  height: 50%;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(0, 174, 149, 1);
  background: linear-gradient(
    0deg,
    rgba(0, 174, 149, 0.1) 33%,
    rgba(0, 174, 149, 1) 100%
  );
  animation: ${spin} 0.8s linear 0s infinite;
`

const StyledCircleCore = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f6f6;
  border-radius: 50%;
`
