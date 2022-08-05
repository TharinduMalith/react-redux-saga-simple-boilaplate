/*
 * Cx Pulse 16.12.2020
 * Copyright © 2021 ADL. All rights reserved.
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import { PATHS } from "../utilities/constants";
import PageNotFound from "../components/templates/404Template";
import screens from "./screens";


const App = () => {
  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        {Object.keys(screens).map(
          (key) => (
            <Route
              key={key}
              path={screens[key].path}
              component={screens[key].component}
              exact
            />
          )
        )}
        <Route path={PATHS.WILD_CARD} component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
