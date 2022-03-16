import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./home/home";
// import { RouteNotFound } from "./routeNotFound/routeNotFound";




export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='*'>
                    <RouteNotFound />
                </Route>
            </Switch>
        </Router>
    )
}