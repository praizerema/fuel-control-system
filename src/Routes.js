import React from "react";
import { Switch, Route, Redirect} from "react-router";
import Login from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const ConfigRouters = () => (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/" component={Dashboard} />

      </Switch>
 
);

export default ConfigRouters;