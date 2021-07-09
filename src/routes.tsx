import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/repositories">
            <Repositories />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;

