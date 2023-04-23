import { useState } from 'react'
import styled from 'styled-components'

export type InputType = {
  value: string
  onChange: (value: string) => void
  handleClickSubmit: () => void
  placeholder?: string
}

const Input = ({
  value,
  onChange,
  handleClickSubmit,
  placeholder = '',
  ...props
}: InputType) => {
  const [isComposing, setIsComposing] = useState(false)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isComposing) {
      event.preventDefault()
      handleClickSubmit()
    }
  }

  const handleCompositionStart = () => {
    setIsComposing(true)
  }

  const handleCompositionEnd = () => {
    setIsComposing(false)
  }

  return (
    <StyledInput
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      placeholder={placeholder}
      {...props}
    />
  )
}
export default Input

const StyledInput = styled.input`
  // 初期スタイルリセット
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-color: #fff;
  padding: 4px;
  line-height: 1;
  border-radius: 6px;
  font-family: 'Zen Maru Gothic', sans-serif;

  &::placeholder {
    color: #00ae95;
  }
`
