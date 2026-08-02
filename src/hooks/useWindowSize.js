// This hook tells us the current screen width
// so we can change the layout based on screen size
import { useState, useEffect } from 'react'

function useWindowSize() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Update width whenever window is resized
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    // Cleanup: remove listener when component unmounts
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    width,
    // Breakpoints
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  }
}

export default useWindowSize