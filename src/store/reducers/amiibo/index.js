import {
  AMIIBO_FAILED,
  AMIIBO_SUCCESS,
  AMIIBO_LOADING,
} from '../../actions/actionTypes';

export const amiiboReducer = (state = {loading: false}, action) => {
  switch (action.type) {
    case AMIIBO_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case AMIIBO_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case AMIIBO_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
