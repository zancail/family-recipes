import { useState, useEffect } from "react"

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(0)

  //compontentDidMount
  useEffect(() => {
    const updatePosition = () => {
      setScrollPos(window.pageYOffset)
    }

    window.addEventListener("scroll", updatePosition)
    updatePosition()
    // cleanup
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return scrollPos
}

export default useScrollPosition
