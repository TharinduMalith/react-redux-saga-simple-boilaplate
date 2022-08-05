import { removeHeadersForAllInstances } from "../../utilities/api/instances";
import { AUTH_TYPES, COMMON_TYPES } from "../../utilities/constants";

export const INIT_STATE = {
  loading: false,
  refreshToken:"",
  accessToken: "",
  error : false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case AUTH_TYPES.SIGN_IN + COMMON_TYPES.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH_TYPES.SIGN_IN + COMMON_TYPES.SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case AUTH_TYPES.REFRESH_TOKEN + COMMON_TYPES.SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case AUTH_TYPES.SET_INITIAL_ROUTE: {
      return { ...state, initialRoute: action.payload};
    }
    case AUTH_TYPES.SIGN_OUT + COMMON_TYPES.REQUEST: {
      removeHeadersForAllInstances()
      window.sessionStorage.clear()
      return { ...state, loading: false, accessToken: "", refreshToken: "",tokenExpireDate:"",refreshTokenExpireDate:"",permissions:[] ,error : false};
    }
    default:
      return state;
  }
};
