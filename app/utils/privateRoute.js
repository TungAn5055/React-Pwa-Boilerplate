// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import Cookie from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types,no-shadow
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = Cookie.get('customer_access_token');

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
