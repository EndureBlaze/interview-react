import { useState, useEffect } from 'react'

const useDate = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const tick = () => setDate(new Date())
    const timerId = setTimeout(tick, 1000)
    return () => clearTimeout(timerId)
  }, [date])

  return { date }
}

export { useDate }
