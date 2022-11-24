import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      })
    }
    window.document.addEventListener('mousemove', handleWindowMouseMove)

    return () => {
      window.document.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])

  return { coords }
}

export { useMousePosition }
