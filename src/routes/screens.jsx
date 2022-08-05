/*
 * Cx Pulse 16.12.2020
 * Copyright © 2021 ADL. All rights reserved.
 */
import {
  SamplePage,
} from "../components";
import asyncComponent from "../utilities/asyncComponent";
import { PATHS } from "../utilities/constants";

export default {
  SamplePage: {
    path: PATHS.DASHBOARD.SAMPLE,
    component: asyncComponent(SamplePage),
  },
};
