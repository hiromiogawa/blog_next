export type InputType = {
  value: string
  onChange: (value: string) => void
  handleClickSubmit: () => void
}

const Input = ({ value, onChange, handleClickSubmit }: InputType) => {
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
      event.preventDefault()
      handleClickSubmit()
    }
  }
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKey}
      onKeyUp={handleKey}
    />
  )
}
export default Input
