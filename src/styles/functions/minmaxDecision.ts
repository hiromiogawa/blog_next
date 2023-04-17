import { Device } from '@/styles/vars'
import type { DeviceType } from '@/styles/types'

/** minmaxを判定してmaxだったら(width - 1)を返す */
const minmaxDecision = (
  width: number | keyof DeviceType,
  minmax: 'min' | 'max'
): number => {
  let _width: number = typeof width === 'number' ? width : Device[width]
  _width = minmax === 'max' ? _width - 1 : _width
  return _width
}

export default minmaxDecision
