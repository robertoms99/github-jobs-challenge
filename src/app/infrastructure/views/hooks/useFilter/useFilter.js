import { useState } from 'react'
import { CONTEXT_STATE_FILTERS } from '../../../../domain/setting/constants'

const useFilter = () => {
  const [location, setLocation] = useState(CONTEXT_STATE_FILTERS.location)
  const [isFullTime, setIsFullTime] = useState(CONTEXT_STATE_FILTERS.isFullTime)
  const [description, setDescription] = useState(
    CONTEXT_STATE_FILTERS.description
  )

  return {
    location,
    description,
    isFullTime,
    actions: {
      onChangeLocation: setLocation,
      onChangeIsFullTime: setIsFullTime,
      onChangeDescription: setDescription,
    },
  }
}

export default useFilter
