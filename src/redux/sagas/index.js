
import { fork } from 'redux-saga/effects';
import requestSaga from "./request";
import sampleSaga from "./sample";

export default function* rootSaga() {
    yield fork(requestSaga)
    yield fork(sampleSaga)
}