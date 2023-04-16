// components
import DayTime1, { DayTime1Type } from '@/components/atoms/text/DayTime1'

export type CardHeaderType = {
  createdAt: DayTime1Type['children']
}

const CardHeader = ({ createdAt, ...props }: CardHeaderType) => {
  return (
    <header {...props}>
      <DayTime1>{createdAt}</DayTime1>
    </header>
  )
}

export default CardHeader
