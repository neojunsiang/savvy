import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import MainPage from "./Pages/MainPage";
import CreateBankPage from "./Pages/CreateBankPage";
import ShowBankPage from "./Pages/ShowBankPage";
import CreateTransactionPage from "./Pages/CreateTransactionPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import EditTransactionPage from "./Pages/EditTransactionPage";

function App() {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/welcome">
          <Login setUser={setUser} />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <ProtectedRoute path="/create-bank">
          <CreateBankPage />
        </ProtectedRoute>
        <ProtectedRoute path="/main/:bankName/:nickName/:bankId/create-transaction">
          <CreateTransactionPage />
        </ProtectedRoute>
        <ProtectedRoute path="/main/:bankName/:nickName/:bankId/edit-transaction">
          <EditTransactionPage />
        </ProtectedRoute>
        <ProtectedRoute path="/main/:bankName/:nickName">
          <ShowBankPage />
        </ProtectedRoute>
        <ProtectedRoute path="/main">
          <MainPage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
