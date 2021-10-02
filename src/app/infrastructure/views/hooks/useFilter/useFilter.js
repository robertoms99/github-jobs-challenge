import { useCallback, useEffect, useReducer, useRef } from 'react'
import { ACTION_TYPES, CONTEXT_STATE_FILTERS } from '../../../../domain/setting/constants'
import  {debounce, throttle} from '../../../lib/wrapperify/wrapperify'
import jobService from '../../../../domain/services/jobs.service'

const reducer = (state=CONTEXT_STATE_FILTERS,action)=> {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_LOCATION:
      return {...state, location: action.location }
    case ACTION_TYPES.TOGGLE_IS_FULL_TIME:
      return {...state, isFullTime: !state.isFullTime }
    case ACTION_TYPES.CHANGE_DESCRIPTION:
      return {...state, description: action.description}
    case ACTION_TYPES.UPDATE_FILTERED_JOBS:
      return {...state, filteredJobs: action.jobs}
  }
  return state
}

const useFilter = () => {
  const [state,dispatch] = useReducer(reducer,CONTEXT_STATE_FILTERS)
  const debouncing = useRef(debounce((location)=>{
    (async ()=> {
      const jobs = await jobService.getJobsByLocation(location)
      onChangeFilteredJobs(jobs)
    })()
}, 1000))

  const onChangeFilteredJobs = (jobs)=> dispatch({type:ACTION_TYPES.UPDATE_FILTERED_JOBS,jobs})

  useEffect(()=>{
    console.log(state.location)
    if(state.location.length > 0) debouncing.current(state.location)
  },[state.location])

  return {
    location: state.location,
    description:state.description,
    isFullTime:state.isFullTime,
    jobs: state.filteredJobs,
    actions: {
      onChangeLocation: (location)=> dispatch({type:ACTION_TYPES.CHANGE_LOCATION,location}),
      onChangeIsFullTime: ()=> dispatch({type:ACTION_TYPES.TOGGLE_IS_FULL_TIME}),
      onChangeDescription: ()=> dispatch({type: ACTION_TYPES.CHANGE_DESCRIPTION}),
      onChangeFilteredJobs
    },
  }
}

export default useFilter
