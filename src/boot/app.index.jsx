/*
 * Cx Pulse 16.12.2020
 * Copyright © 2021 ADL. All rights reserved.
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";

import PrivateRoute from "../routes/privateRoute";
import PublicRoute from "../routes/publicRoute";

import MainApp from "./app.component";
import PageNotFound from "../components/templates/404Template";
import { PATHS } from "../utilities/constants";
import { InternalOverallCEPage, LoginPage, OverallCEConfigPage ,  CampaignManagement} from "../components";
import asyncComponent from "../utilities/asyncComponent";

const App = (props) => {

  return (
    <Switch>
      <Route path={PATHS.CX_PULSE.OVERALL_CE_CONFIG} component={asyncComponent(OverallCEConfigPage)} />
      <Route path={PATHS.CX_PULSE.OVERALL_CE} component={asyncComponent(InternalOverallCEPage)} />
      <Route path={PATHS.CX_PULSE.CAMPAIGN_MANAGEMENT} component={CampaignManagement} />
      <PublicRoute path={PATHS.LOGIN} Component={LoginPage} exact />
      <PrivateRoute
        path={PATHS.DASHBOARD.WILD_CARD}
        Component={MainApp}
        exact
      />
      <Route path={PATHS.WILD_CARD} component={PageNotFound} />
    </Switch>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default App;