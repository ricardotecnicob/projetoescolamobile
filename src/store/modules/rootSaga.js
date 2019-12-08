import { all } from 'redux-saga/effects';

import note from './note/sagas';

export default function* rootSaga() {
  return yield all([note]);
}
