/*
 * Cx Pulse 16.12.2020
 * Copyright © 2021 ADL. All rights reserved.
 */


export const FETCH_START = "fetch_start";
export const FETCH_SUCCESS = "fetch_success";
export const FETCH_ERROR = "fetch_error";
export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const HIDE_MESSAGE = "HIDE_MESSAGE";

export const MAKE_API_REQUEST = "MAKE_API_REQUEST";

export const DEFAULT_CASE = "DEFAULT_CASE";

export const SAMPLE = {
    SAMPLE_LIST: "SAMPLE_LIST",
};


export const COMMON_TYPES = {
    REQUEST: "_REQUEST",
    SUCCESS: "_SUCCESS",
    FAILURE: "_FAILURE",
    RESET: "_RESET",
};

export const NETWORK_STATUS_CODE = {
    SUCCESS: 200,
    UNPROCURABLE_ENTITY: 422,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    EXPECTATION_FAILED: 417,
    INTERNAL_STATUS_ERROR: 500,
    NOT_ACCEPTABLE: 406,
};


// Auth const
export const AUTH_TYPES = {
    AZURE_SIGN_IN: "AZURE_SIGN_IN",
    SIGN_IN: "CX_SIGN_IN",
    SIGN_OUT: "SIGN_OUT",
    REFRESH_TOKEN: "REFRESH_TOKEN",
    SET_INITIAL_ROUTE: "SET_INITIAL_ROUTE",
};

export const SAMPLE_TYPES = {
    GET_SAMPLE: "GET_SAMPLE",
}

export const FILTER_TYPES = {
    GET_FILTERS: "GET_FILTERS",
    APPLY_FILTERS: "APPLY_FILTERS",
    APPLY_DISTRICT_FILTER: "APPLY_DISTRICT_FILTER",
}

export const CAMPAIGN_MANAGEMENT_FILTER_TYPES = {
    GET_FILTERS: "CAMPAIGN_MANAGEMENT_GET_FILTERS",
    APPLY_FILTERS: "APPLY_FILTERS",
}

export const OVERALL_CONFIG_TYPES = {
    GET_CONFIG: "GET_CONFIG",
    GET_TOUCHPOINT: "GET_TOUCHPOINT",
    GET_SURVEY: "GET_SURVEY",
    SET_CONFIG: "SET_CONFIG",
    EDIT_CONFIG: "EDIT_CONFIG",
    SET_TOUCHPOINT_SURVEY_MAPPING: "SET_TOUCHPOINT_SURVEY_MAPPING"
}

export const TRANSACTIONAL = {
    GET_TRADITIONAL_DIGITAL: "GET_TRADITIONAL_DIGITAL",
    GET_OVERALL_TRANSACTIONAL: "GET_OVERALL_TRANSACTIONAL",
    GET_OVERALL_TRANSACTIONAL_CONTRIBUTION: "GET_OVERALL_TRANSACTIONAL_CONTRIBUTION",
    GET_OVERALL_NPS_MONTHLY_TREND: "GET_OVERALL_NPS_MONTHLY_TREND"
}

export const OVERALL_CE_NET_EASY = {
    GET_OVERALL_NET_EASY_DALY_TREND: "GET_OVERALL_NET_EASY_DALY_TREND",
    GET_OVERALL_NET_EASY_NES_CHART: "GET_OVERALL_NET_EASY_NES_CHART",
    GET_CES_CONTRIBUTION: "GET_CES_CONTRIBUTION",
    GET_OVERALL_NES_MOM_TREND: "GET_OVERALL_NES_MOM_TREND",
}

export const FCR = {
    GET_OVERALL_FCR: "GET_OVERALL_FCR",
    GET_FCR_CONTRIBUTION: "GET_FCR_CONTRIBUTION",
    GET_OVERALL_FCR_DAILY_TREND: "GET_OVERALL_FCR_DAILY_TREND",
    GET_OVERALL_FCR_MOM_TREND: "GET_OVERALL_FCR_MOM_TREND"
}

export const HAPPINESS = {
    GET_OVERALL_HAPPINESS: "GET_OVERALL_HAPPINESS",
    GET_OVERALL_HAPPINESS_MOM_TREND: "GET_OVERALL_HAPPINESS_MOM_TREND",
    GET_HAPPINESS_CONTRIBUTION: "GET_HAPPINESS_CONTRIBUTION",
}

export const NTS = {
    GET_OVERALL_NTS: "GET_OVERALL_NTS",
    GET_OVERALL_NTS_MOM_TREND: "GET_OVERALL_NTS_MOM_TREND",
    GET_NTS_CONTRIBUTION: "GET_NTS_CONTRIBUTION"
}

export const ACTIONABLE_INSIGHT = {
    GET_ACTIONABLE_INSIGHTS: "GET_ACTIONABLE_INSIGHTS",
    SAVE_ACTIONABLE_INSIGHT: "SAVE_ACTIONABLE_INSIGHT",
    UPDATE_ACTIONABLE_INSIGHT: "UPDATE_ACTIONABLE_INSIGHT",
    DELETE_ACTIONABLE_INSIGHT: "DELETE_ACTIONABLE_INSIGHT",
    ADD_WIDGET_NOTE: "ADD_WIDGET_NOTE",
    CHANGE_WIDGET_FIELD: "CHANGE_WIDGET_FIELD",
    UPDATE_WIDGET_NOTE: "UPDATE_WIDGET_NOTE",
    ADD_NEW_WIDGET: "ADD_NEW_WIDGET",
    REMOVE_WIDGET_NOTE: "REMOVE_WIDGET_NOTE",
    REMOVE_WIDGET: "REMOVE_WIDGET"
}

export const ALERT_MESSAGE = {
    SET_ALERT_MESSAGE: "SET_ALERT_MESSAGE",
    REMOVE_ALERT_MESSAGE: "REMOVE_ALERT_MESSAGE"
}

export const ORDERED_WIDGET = {
    GET_ORDERED_WIDGET: "GET_ORDERED_WIDGET",
    SET_WIDGET_ORDER: "SET_WIDGET_ORDER",
    SAVE_WIDGET_ORDER: "SAVE_WIDGET_ORDER"
}