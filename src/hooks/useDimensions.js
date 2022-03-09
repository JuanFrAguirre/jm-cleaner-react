import { useEffect, useState } from 'react'

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', updateDimensions)
    updateDimensions()

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return dimensions
}

export default useDimensions
