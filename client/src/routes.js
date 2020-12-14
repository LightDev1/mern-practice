import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth';
import Create from './components/Create';
import Detail from './components/Detail';
import Links from './components/Links';

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <Links />
                </Route>
                <Route path="/create" exact>
                    <Create />
                </Route>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Redirect to="/create" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" exact>
                <Auth />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
};