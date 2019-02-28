import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store.js";
import indexRoutes from "routes/index.jsx";

import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.path}
                            component={prop.component}
                            key={key}
                            exact={prop.exact}
                        />
                    );
                })}
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
