import React, { useEffect } from 'react'
import 'plyr-react/dist/plyr.css'

const PlyrWrapper = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr')
      Array.from(document.querySelectorAll('.js-player')).map(
        (p) => new Plyr(p)
      )
    }
  })
  return <>{children}</>
}

export default PlyrWrapper
