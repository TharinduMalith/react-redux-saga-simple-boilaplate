import { put, takeLatest } from "redux-saga/effects";
import {
    COMMON_TYPES,
    MAKE_API_REQUEST,
    SAMPLE_TYPES
} from "../../utilities/constants";
import { getSampleAPI } from "../../utilities/api";

export function* getSampleList(action) {
    const payload = {
        api: getSampleAPI,
        action: SAMPLE_TYPES.GET_SAMPLE,
        payload: action.payload
    };
    yield put({ type: MAKE_API_REQUEST, payload });
}

export default function* sampleSage() {
    yield takeLatest(
        SAMPLE_TYPES.GET_SAMPLE + COMMON_TYPES.REQUEST,
        getSampleAPI
    );
}
