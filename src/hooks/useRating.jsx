import { useCallback, useState } from 'react'

function useRating() {
    const [rating,setRating] = useState(1)
    const [hover ,setHover]= useState(1)
    const onRatingClick = useCallback((index) =>{
        setRating(index + 1)
    },[])
    const onMouseEnter = (index) =>{
        setHover(index + 1)
    }
    const onMouseLeave = () =>
    {
        setHover(null)
    }

    const filled = useCallback((index) =>{
        return index + 1 <= (hover || rating)
    },[rating, hover])

  return {
    filled,
    onRatingClick,
    onMouseEnter,
    onMouseLeave
  }
  
}

export default useRating