import { takeLatest } from 'redux-saga/effects';
import { AMIIBO_REQUEST } from '../actions/actionTypes';
import fetchAmiiboSaga from './amiibo/fetchAmiibo';

function* rootSaga() {
  yield takeLatest(AMIIBO_REQUEST, fetchAmiiboSaga);
}

export default rootSaga;
