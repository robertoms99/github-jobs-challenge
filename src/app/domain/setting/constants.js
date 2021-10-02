import { lazy } from 'react'

const Home =  lazy (async ()=> import('../../infrastructure/views/pages/Home'))
const Career = lazy (async ()=> import('../../infrastructure/views/pages/Career'))

const DEFAULT_LOCATIONS = ['medellin', 'tokyo', 'sidney', 'berlin']

const ACTION_TYPES= {
  CHANGE_LOCATION: 'CHANGE_LOCATION',
  TOGGLE_IS_FULL_TIME: 'TOGGLE_IS_FULL_TIME',
  CHANGE_DESCRIPTION: 'CHANGE_DESCRIPTION',
  UPDATE_FILTERED_JOBS: 'UPDATE_FILTERED_JOBS'
}

const CONTEXT_STATE_FILTERS = {
  filteredJobs : [],
  location: DEFAULT_LOCATIONS[0] ?? '',
  description: '',
  isFullTime: false,
  actions: {
    onChangeLocation: () => {},
    onChangeIsFullTime: () => {},
    onChangeDescription: () => {},
    onChangeFilteredJobs: ()=> {}
  }
}

const APP_ROUTES = [
  {
    id: 1,
    path: '/',
    component: Home,
  },
  {
    id: 2,
    path: '/career/:slug',
    component: Career,
  },
]

const MAX_COUNT_ITEMS_PER_PAGE = 5

export { APP_ROUTES,ACTION_TYPES, DEFAULT_LOCATIONS, CONTEXT_STATE_FILTERS ,MAX_COUNT_ITEMS_PER_PAGE}
