import produce from 'immer';

const INITIAL_STATE = {
  allNotes: [],
  loading: false,
};
export default function note(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@note/LOAD_NOTES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@note/LOAD_NOTES_SUCCESS': {
        draft.allNotes = action.payload.allNotes;
        draft.loading = false;
        break;
      }
      case '@note/LOAD_NOTES_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
