import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFoundPage } from './containers';
import routeConfiguration from './routeConfiguration';

const RouteComponent = props => {
    const { route, isAuthenticated, ...rest } = props;
    const { auth, component: Component, authPage = '/login' } = route;
    const show = !auth || isAuthenticated;
    if (show) return <Component {...rest} />
    else return <Redirect to={authPage} />
};

const Routes = () => {
    const {
        isAuthenticated
    } = useSelector(state => state.auth);

    const toRouteComponent = route => {
        return (
            <Route
                key={route.name}
                path={route.path}
                render={routeProps => (
                    <RouteComponent
                        {...routeProps}
                        route={route}
                        isAuthenticated={isAuthenticated}
                    />
                )}
            />
        )
    };

    return (
        <Switch>
            {routeConfiguration().map(toRouteComponent)}
            <Route component={NotFoundPage}/>
        </Switch>
    );
}

export default Routes;