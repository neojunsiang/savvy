import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <nav>
        <li><Link to="/welcome">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/demo">Demo</Link></li>
      </nav>
      <hr />
      <Switch>
        <Route path="/welcome">

        </Route>
        <Route path="/signup">

        </Route>
        <Route path="/demo">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
