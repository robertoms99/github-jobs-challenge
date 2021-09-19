import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { APP_ROUTES } from './domain/setting/constants'
import { Suspense } from 'react'
import FilterContextProvider from './infrastructure/views/components/common/FilterContextProvider'

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
    <Router>
      <FilterContextProvider>
        <Switch>
          {APP_ROUTES.map((route, index) => (
            <Route exact path={route.path} key={index}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </FilterContextProvider>
    </Router>
    </Suspense>
  )
}

export default App
