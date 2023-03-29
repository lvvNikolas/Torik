import { useEffect, useState } from "react"

export const useResize = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const listener = (e) => {
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize', listener)
        }
    },[])

    return width
}