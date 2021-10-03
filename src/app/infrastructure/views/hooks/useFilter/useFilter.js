import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { ACTION_TYPES, CONTEXT_STATE_FILTERS } from '../../../../domain/setting/constants'
import  {debounce} from '../../../lib/wrapperify/wrapperify'
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
  const [loading,setLoading] = useState(true)
  const [mounted,setMounted] = useState(false)

  useEffect(()=>{
    if(!mounted) return setMounted(true)
    setLoading(false)
  },[state.filteredJobs])

  useEffect(()=>{
    setLoading(true)
  },[state.description,state.location])

  const getJobsByLocationWithDebouncing = useCallback(debounce((location)=>{
    (async ()=> {
      if(location.trim().length > 0) {
        const jobs = await jobService.getJobsByLocation(location)
        onChangeFilteredJobs(jobs)
      }
    })()
  },700),[])

  const getJobsByDescription = useCallback((description)=>{
    (async ()=> {
      if(description.trim().length > 0) {
        const jobs = await jobService.getJobsByDescription(description)
        onChangeFilteredJobs(jobs)
      }
    })()
  },[])

  const onChangeFilteredJobs = (jobs) => dispatch({type:ACTION_TYPES.UPDATE_FILTERED_JOBS,jobs})

  useEffect(()=>{
    getJobsByLocationWithDebouncing(state.location)
  },[state.location])

  useEffect(()=>{
    getJobsByDescription(state.description)
  },[state.description])

  return {
    loading,
    location: state.location,
    description:state.description,
    isFullTime:state.isFullTime,
    jobs: state.filteredJobs,
    actions: {
      onChangeLocation: (location)=> dispatch({type:ACTION_TYPES.CHANGE_LOCATION,location}),
      onChangeIsFullTime: ()=> dispatch({type:ACTION_TYPES.TOGGLE_IS_FULL_TIME}),
      onChangeDescription: (description)=> dispatch({type: ACTION_TYPES.CHANGE_DESCRIPTION,description}),
      onChangeFilteredJobs
    },
  }
}

export default useFilter
