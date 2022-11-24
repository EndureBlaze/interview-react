import { useState, useEffect } from 'react'

const useIpAddress = () => {
  const [ipAddress, setIpAddress] = useState(null)

  useEffect(() => {
    const getIpAddress = async () => {
      const result = await fetch('https://api.ipify.org?format=json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const json = await result.json()
      setIpAddress(json.ip)
    }
    getIpAddress()
  }, [])

  return { ipAddress }
}

export { useIpAddress }
