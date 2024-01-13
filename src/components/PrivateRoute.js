import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../controllers/UserAuthentication';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to login page
        <Route {...rest} render={props => (
            isLoggedIn() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;