import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

PrivateRoute.prototype = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
