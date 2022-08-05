import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  MAKE_API_REQUEST,
  NETWORK_STATUS_CODE,
  COMMON_TYPES,
  MESSAGES,
  ALERT_MESSAGE,
  MESSAGE_TYPE,
} from "../../utilities/constants";
import { removeHeadersForAllInstances, setHeadersForAllInstances } from "../../utilities/api/instances";

/** Saga to be called to make API calls. Will handle all exceptions and show relevant error messages. */
function* networkRequestSaga(action) {
  try {

        setHeadersForAllInstances("test token");
      
        const response = yield call(
          action.payload.api,
          action.payload.payload,
          action.payload.axiosConfig
        );

        switch (response.status) {
          case NETWORK_STATUS_CODE.SUCCESS:
            // Will fire a success action if stats code is 200
            if (action.payload.responseYupSchema) {
              action.payload.responseYupSchema.validateSync(response.data);
            }

            yield put({
              type: action.payload.action + COMMON_TYPES.SUCCESS,
              payload: response.data,
            });

            if (action.payload.message) {
              yield put({
                type: ALERT_MESSAGE.SET_ALERT_MESSAGE,
                payload: {
                  message: action.payload.message,
                  type: MESSAGE_TYPE.SUCCESS
                },
              });
            }

            break;
          case NETWORK_STATUS_CODE.UNAUTHORIZED:
            yield put({
              type: ALERT_MESSAGE.SET_ALERT_MESSAGE,
              payload: {
                message: MESSAGES.UNAUTHORIZED,
                type: MESSAGE_TYPE.ERROR
              }
            });
            removeHeadersForAllInstances()
            break;
          default:
            yield put({ type: action.payload.action + COMMON_TYPES.FAILURE });
        }

  } catch (err) {
    // If an exception is made withing the requestSage, will show an error saying 'Oops, something went wrong!'
    console.error(err);
    yield put({
      type: ALERT_MESSAGE.SET_ALERT_MESSAGE,
      payload: {
        message: MESSAGES.FAILED,
        type: MESSAGE_TYPE.ERROR
      }
    });
    yield put({ type: action.payload.action + COMMON_TYPES.FAILURE });
  }
}

export function signOut() {
  removeHeadersForAllInstances()
  window.sessionStorage.clear()
  window.top.location.href = '/';
}

export default function* requestSaga() {
  yield takeEvery(MAKE_API_REQUEST, networkRequestSaga);
}
