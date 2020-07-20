import {
  AMIIBO_REQUEST,
  AMIIBO_FAILED,
  AMIIBO_SUCCESS,
} from '../actions/actionTypes';

export const amiiboRequest = (name) => ({ type: AMIIBO_REQUEST, name });

export const amiiboSuccess = (data) => ({ type: AMIIBO_SUCCESS, data });

export const amiiboFailed = (error) => ({
  type: AMIIBO_FAILED,
  error,
});
