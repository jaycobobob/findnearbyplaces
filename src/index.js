import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import pages from "./pages/_pages";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <pages.home />
                </Route>
                <Route exact path="/login">
                    <pages.login />
                </Route>
                <Route exact path="/register">
                    <pages.register />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
