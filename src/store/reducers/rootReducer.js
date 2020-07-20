import { combineReducers } from 'redux';

import { amiiboReducer as amiibo } from './amiibo';

const entities = combineReducers({
  amiibo,
});

export default entities;
