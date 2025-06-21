import { useEffect, useState } from "react"

export const useWindowResize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    function handleSize() {
        setScreenSize({ ...screenSize, width: window.innerWidth, height: window.innerHeight })
        // setScreenSize({ ...screenSize, })
    }

    useEffect(() => {
        window.addEventListener('resize', handleSize)
        return () => {
            window.removeEventListener('resize',handleSize)
        }
    }, [screenSize])


    return screenSize
}