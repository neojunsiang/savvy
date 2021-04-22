import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const ProtectedRoute = ({ children, ...rest }) => {
  const [{ loginUser }, dispatch] = useStateValue();

  // For alternative methods
//   const Component = component;

  // Alternative 1
//   if (loginUser === "") {
//     return <Redirect to="/welcome" />;
//   } else {
//     return <Component />;
//   }

  // Alternative 2
  // return loginUser ? (<Redirect to="/welcome" />) : (<Component />)

    return (
      <Route
        {...rest}
        render={() => {
          return loginUser === "" ? <Redirect to="/welcome" /> : children;
        }}
      />
    );
};

export default ProtectedRoute
