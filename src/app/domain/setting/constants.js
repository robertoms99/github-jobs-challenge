import { lazy } from 'react'

const Home =  lazy (async ()=> import('../../infrastructure/views/pages/Home'))
const Career = lazy (async ()=> import('../../infrastructure/views/pages/Career'))

const CONTEXT_STATE_FILTERS = {
  location: '',
  description: '',
  isFullTime: false,
  actions: {
    onChangeLocation: () => {},
    onChangeIsFullTime: () => {},
    onChangeDescription: () => {},
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

const DEFAULT_LOCATIONS = ['london', 'amsterdam', 'new york', 'berlin']

export { APP_ROUTES, DEFAULT_LOCATIONS, CONTEXT_STATE_FILTERS }
