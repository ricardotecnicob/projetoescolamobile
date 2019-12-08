import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import {
  loadNotesRequest,
  loadNotesSuccess,
  loadNotesFailure,
  createNoteSuccess,
  createNoteFailure,
} from './actions';

export function* loadNotes() {
  try {
    const response = yield api.get(`/note`);

    if (response) {
      yield put(loadNotesSuccess(response.data));
    }
  } catch (error) {
    Alert.alert(
      'Failed to load Notes',
      'It was not possible to load notes from server.'
    );
    yield put(loadNotesFailure());
  }
}

export function* createNote({ payload }) {
  try {
    const { name, description } = payload;

    const response = yield call(api.post, 'notes', { name, description });

    if (response) {
      yield put(createNoteSuccess());
      yield put(loadNotesRequest());
    }
  } catch (error) {
    Alert.alert(
      'Failed to create note',
      'It was not posible to a create a new note.'
    );
    yield put(createNoteFailure());
  }
}

export default all([
  takeLatest('@note/LOAD_NOTES_REQUEST', loadNotes),
  takeLatest('@note/CREATE_NOTE_REQUEST', createNote),
]);
