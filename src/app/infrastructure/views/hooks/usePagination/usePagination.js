import { useEffect, useState } from 'react'

const usePagination = (count, totalItems) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalCount, setTotalCount] = useState(totalItems)
  const [totalPages, setTotalPages] = useState(Math.ceil(totalCount / count))

 useEffect(()=> setTotalPages(Math.ceil(totalCount / count)),[totalCount])

  const changeCurrentIndex = (step)=> {
    setCurrentIndex((prevIndex)=>{
      const index =Math.max(0,Math.min(totalPages - 1, prevIndex + step))
      return index
    } )
  }

  const updateCurrentPage = (page)=> setCurrentIndex(page)

  const previousStep = (step = -1)=> {
    step = (step >= 0) ? -step : step
    changeCurrentIndex(step)
  }

  const nextStep = (step = 1) => changeCurrentIndex(Math.abs(step))

  return ({
    pages:totalPages,
    currentIndex,
    actions: {
      setTotalCount,
      updateCurrentPage,
      nextStep,
      previousStep
    }
  })
}

export default usePagination
