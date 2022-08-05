/*
 * Cx Pulse 16.12.2020
 * Copyright © 2021 ADL. All rights reserved.
 */

export const ACCESS_TOKEN = "accessToken";
export const AUTHORIZATION = "Authorization";

export const MESSAGES = {
    LOADING: "Loading...",
    SUCCESS: "Success!",
    UNAUTHORIZED: "Your session has expired. Please Relogin",
    NOT_FOUND: "URI not found!",
    FAILED: "Oops, Something went wrong!",
    INTERNAL_STATUS_ERROR: "(Internal Server Error) Oops, Something went wrong!",
    BAD_REQUEST: "Bad Request!",
    INVALID_CREDENTIALS: "Username or Password is incorrect",
    ACCESS_DENIED: "Error : Access is denied. This will be reported...",
}

export const CONFIG_MESSAGES = {
    VALID_CONFIG: "Add valid configuration.",
    VALID_NAME: "Add valid name.",
    VALID_TOUCHPOINT: "Add valid Touchpoint",
    EMPTY_NAME: "Name Cannot Be Empty",
    EMPTY_SURVEY: "Survey cannot be empty",
    DUPLICATE_NAME: "Duplicate display name",
    DUPLICATE_CONFIG: "2 Configurations Exists",
    DUPLICATE_AGENT_BOT: "Agent Bot Configuration Already Exist.",
    CHANGES_APPLIED: "Changes applied successfully.",
    EMPTY_DISPLAY_NAME: "Fill all Display Names",
    ATLEAST_ONE_SURVEY: "At least one survey needed"
}

export const MESSAGE_TYPE = {
    SUCCESS: 'success',
    ERROR: 'error'
}


export const LOCAL_STORAGE = {
    TOKEN: "token",
    REFRESH_TOKEN: "refreshToken",
    TOKEN_EXPIRE_DATE: "tokenExpireDate",
    REFRESH_TOKEN_EXPIRE_DATE: "refreshTokenExpireDate",
}

