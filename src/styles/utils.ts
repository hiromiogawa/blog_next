import { Device, DeviceType } from './vars'

// minmaxを判定してmaxだったらwidth-1
const minmaxDecision = (
  width: number | keyof DeviceType,
  minmax: 'min' | 'max'
): number => {
  let _width: number = typeof width === 'number' ? width : Device[width]
  _width = minmax === 'max' ? _width - 1 : _width
  return _width
}

// px→vw
export const vw = (
  px: number,
  width: number | keyof DeviceType = Device.tb,
  minmax: 'min' | 'max' = 'min'
): string => {
  const _width = minmaxDecision(width, minmax)
  return `${(100 / _width) * px}vw`
}

// MediaQuery
export const media = (
  width: number | keyof DeviceType = Device.tb,
  minmax: 'min' | 'max' = 'max'
): string => {
  const _minmax: string = minmax === 'max' ? 'max-width' : 'min-width'
  const _width = minmaxDecision(width, minmax)
  return `@media (${_minmax}: ${_width}px)`
}
