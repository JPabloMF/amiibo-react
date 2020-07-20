import { call, put } from 'redux-saga/effects';
import {
  AMIIBO_FAILED,
  AMIIBO_SUCCESS,
  AMIIBO_LOADING,
} from '../../actions/actionTypes';
import { getAmiibo } from '../../../api/amiibo/getAmiibo';

function* fetchAmiiboSaga({ name }) {
  try {
    yield put({ type: AMIIBO_LOADING });
    const { amiibo } = yield call(getAmiibo, name);
    yield put({ type: AMIIBO_SUCCESS, data: amiibo });
  } catch (e) {
    yield put({ type: AMIIBO_FAILED, error: e.message });
  }
}

export default fetchAmiiboSaga;
