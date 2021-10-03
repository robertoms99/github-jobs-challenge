import { useEffect, useState } from 'react'

const useImageFallback = (image,fallback)=> {
    const [imageWithFallback, setImageWithFallback] = useState(fallback)

    useEffect(()=>{
        let element = document.createElement('img')
        element.src = image
        element.onload = ()=> {
            setImageWithFallback(image)
            element.onload = null
            element = null
        }
    },[])

    return {
        imageWithFallback
    }
}

export default useImageFallback