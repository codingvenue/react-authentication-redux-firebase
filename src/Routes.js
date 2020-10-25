import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFoundPage } from './containers';

class RouteComponent extends React.Component {

    render() {
        const { route, isAuthenticated, ...rest } = this.props;
        const { auth, component: Component, authPage = '/login' } = route;
        const show = !auth || isAuthenticated;
        return show ? (
            <Component {...rest} />
        ) : (
                <Redirect to={authPage} />
            );
    }
};

const Routes = props => {

    const { routes } = props;

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

    // Routes needs to be in props so
    // react is is not rerendering page component
    return (
        <Switch>
            {routes.map(toRouteComponent)}
            <Route component={NotFoundPage} />
        </Switch>
    );
}

export default Routes;