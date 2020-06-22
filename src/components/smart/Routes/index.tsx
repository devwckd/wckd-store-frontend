import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Landing from "pages/Landing";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Landing/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;