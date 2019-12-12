import { combineReducers } from 'redux';

import note from './note/reducer';
import login from './login/reducer';

export default combineReducers({
  note,
  login,
});
