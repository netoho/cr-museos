import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  DirectionPage,
  LoginPage,
  DirectionQueryPage,
  IndicatorsPage
} from "./Pages";

export default (
  <Switch>
    <Route path="/direction/query" component={DirectionQueryPage} />,
    <Route path="/direction" component={DirectionPage} />,
    <Route path="/indicators" component={IndicatorsPage} />,
    <Route path="/login" component={LoginPage} />
  </Switch>
);
