import minmaxDecision from '@/styles/functions/minmaxDecision'
import { Device } from '@/styles/vars'
import type { DeviceType } from '@/styles/types'

// px→vw
const pxToVw = (
  px: number,
  width: number | keyof DeviceType = Device.tb,
  minmax: 'min' | 'max' = 'min'
): string => {
  const _width =
    typeof width === 'string' ? minmaxDecision(width, minmax) : width
  return `${(100 / _width) * px}vw`
}

export default pxToVw
