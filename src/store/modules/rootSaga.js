import { all } from 'redux-saga/effects';

import note from './note/sagas';
import login from './login/sagas';

export default function* rootSaga() {
  return yield all([note, login]);
}
