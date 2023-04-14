import { useState, useEffect } from 'react'
import { Device } from '@/styles/vars'

/**
 * メディアクエリのカスタムhook
 * @param minmax - (min|max)の指定
 * @param breakpoint - ブレイクポイント
 */
const useMediaQuery = (
  minmax: 'min' | 'max' = 'max',
  breakpoint: number = Device.tb - 1
): boolean => {
  const [isMatch, setIsMatch] = useState(() => false)

  useEffect(() => {
    const isMatches = () =>
      window.matchMedia(`(${minmax}-width: ${breakpoint}px)`).matches
    const resetIsMatch = () => {
      const nowIsMatch = isMatches()
      setIsMatch(() => nowIsMatch)
    }
    window.addEventListener('resize', resetIsMatch)
    return () => {
      window.removeEventListener('resize', resetIsMatch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isMatch
}

export default useMediaQuery
