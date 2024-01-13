import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../controllers/UserAuthentication';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false for public route
        // restricted = true for restricted route
        <Route {...rest} render={props => (
            isLoggedIn() && restricted ?
                <Redirect to="/selectMovies" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;