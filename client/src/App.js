import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp'


function App() {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <nav>
        <li>
          <Link to="/welcome">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
      </nav>
      <hr />
      <Switch>

        <Route path="/welcome">
          <Login setUser={setUser} />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/demo">

        </Route>

      </Switch>
    </Router>
  );
}

export default App;
