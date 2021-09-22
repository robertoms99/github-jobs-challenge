import { useState } from 'react'

const usePagination = (count, totalCount) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalPages = Math.ceil(totalCount / count)

  const changeCurrentIndex = (step)=> {
    setCurrentIndex((prevIndex)=> Math.max(0,Math.min(totalPages, prevIndex + step)))
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
      updateCurrentPage,
      nextStep,
      previousStep
    }
  })
}

export default usePagination
