import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { APP_ROUTES } from "./domain/setting/constants";

function App() {
  return (
    <Router>
      <Switch>
        {APP_ROUTES.map((route, index) => (
          <Route exact path={route.path} key={`route-${index}`}>
            <route.component key={`component-${index}`} />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
