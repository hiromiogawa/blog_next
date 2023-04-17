import minmaxDecision from '@/styles/functions/minmaxDecision'
import { Device } from '@/styles/vars'
import type { DeviceType } from '@/styles/types'

/**
 * MediaQuery
 * widthがDeviceTypeの場合、minmaxを判定してmaxだったら(width - 1)して返却
 */
const mediaQuery = (
  width: number | keyof DeviceType = Device.tb,
  minmax: 'min' | 'max' = 'max'
): string => {
  const _minmax: string = minmax === 'max' ? 'max-width' : 'min-width'
  const _width =
    typeof width === 'string' ? minmaxDecision(width, minmax) : width
  return `@media (${_minmax}: ${_width}px)`
}

export default mediaQuery
