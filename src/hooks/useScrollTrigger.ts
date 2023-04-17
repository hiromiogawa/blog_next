import { useEffect, useState, RefObject } from 'react'

/**
 * 指定されたHTML要素が表示領域内にスクロールされたかどうかを監視するカスタムhook
 */
export const useScrollTrigger = (
  ref: RefObject<HTMLElement>,
  startPosition: number = 0
) => {
  const [isTriggered, setIsTriggered] = useState(false)

  useEffect(() => {
    const handleScrollTrigger = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        if (top + startPosition < windowHeight && bottom > 0)
          setIsTriggered(true)
      }
    }

    window.addEventListener('scroll', handleScrollTrigger)
    window.addEventListener('resize', handleScrollTrigger)

    handleScrollTrigger()

    return () => {
      window.removeEventListener('scroll', handleScrollTrigger)
      window.removeEventListener('resize', handleScrollTrigger)
    }
  }, [ref])

  return isTriggered
}

export default useScrollTrigger
