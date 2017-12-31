import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  DirectionPage,
  LoginPage,
  DirectionQueryPage,
  IndicatiorsPage
} from "./Pages";

export default (
  <Switch>
    <Route path="/direction/query" component={DirectionQueryPage} />,
    <Route path="/direction" component={DirectionPage} />,
    <Route path="/indicators" component={IndicatiorsPage} />,
    <Route path="/login" component={LoginPage} />
  </Switch>
);
