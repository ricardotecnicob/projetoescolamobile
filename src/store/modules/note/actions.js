// LOAD
export function loadNotesRequest() {
  return {
    type: '@note/LOAD_NOTES_REQUEST',
  };
}

export function loadNotesSuccess(allNotes) {
  return {
    type: '@note/LOAD_NOTES_SUCCESS',
    payload: { allNotes },
  };
}

export function loadNotesFailure() {
  return {
    type: '@note/LOAD_NOTES_FAILURE',
  };
}

// CREATE
export function createNoteRequest() {
  return {
    type: '@note/CREATE_NOTE_REQUEST',
  };
}

export function createNoteSuccess() {
  return {
    type: '@note/CREATE_NOTE_SUCCESS',
  };
}

export function createNoteFailure() {
  return {
    type: '@note/CREATE_NOTE_FAILURE',
  };
}
