import { useState, useEffect } from 'react'
import { Device } from '@/styles/vars'
import minmaxDecision from '@/styles/functions/minmaxDecision'
import type { DeviceType } from '@/styles/types'

/**
 * メディアクエリのカスタムhook
 */
const useMediaQuery = (
  width: number | keyof DeviceType = Device.tb,
  minmax: 'min' | 'max' = 'max'
): boolean => {
  const [isMatch, setIsMatch] = useState(() => false)
  const breakpoint =
    typeof width === 'string' ? minmaxDecision(width, minmax) : width

  useEffect(() => {
    const isMatches = () =>
      window.matchMedia(`(${minmax}-width: ${breakpoint}px)`).matches
    const resetIsMatch = () => {
      const nowIsMatch = isMatches()
      setIsMatch(() => nowIsMatch)
    }

    resetIsMatch()
    window.addEventListener('resize', resetIsMatch)
    return () => {
      window.removeEventListener('resize', resetIsMatch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isMatch
}

export default useMediaQuery
