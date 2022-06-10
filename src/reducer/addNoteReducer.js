export function reducer(state, action) {
  switch (action.type) {
    case "SET_NOTE":
      return {
        ...state,
        [action.key]: action.value
      };

    case "ADD_TO_NOTE":
      return {
        ...state,
        notes: state.notes.concat(action.value),
        tags: []
      };

    case "SET_TAGS":
      return {
        ...state,
        tags: state.tags.concat(action.payload)
      };

    case "ADD_TAGS":
      return {
        ...state,
        tags: state.tags.concat(action.value)
      };

    case "REMOVE_TAGS":
      return {
        ...state,
        tags: state.tags.filter((_, index) => index !== action.payload)
      };

    case "UPDATE_NOTE":
      const updatedNoteIndex = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );

      const updateNote = [
        ...state.notes.slice(0, updatedNoteIndex),
        action.value,
        ...state.notes.slice(updatedNoteIndex + 1)
      ];
      return {
        ...state,
        notes: updateNote
      };

    case "ADD_TO_ARCHIVE_NOTES":
      return {
        ...state,
        archive: state.archive.concat(action.payload),
        notes: state.notes.filter((item) => item.id !== action.payload.id),
        trash: state.trash.filter((item) => item.id !== action.payload.id),
        pin: state.pin.filter((item) => item.id !== action.payload.id)
      };

    case "REMOVE_FROM_ARCHIVE_NOTES":
      return {
        ...state,
        archive: state.archive.filter((item) => action.payload.id !== item.id),
        notes: state.notes.concat(action.payload)
      };

    case "ADD_ALL_ARCHIVE_TO_TRASH_NOTES":
      return {
        ...state,
        trash: state.trash.concat(action.payload),
        archive: []
      };

    case "ADD_TO_TRASH_NOTES":
      return {
        ...state,
        trash: state.trash.concat(action.payload),
        notes: state.notes.filter((item) => item.id !== action.payload.id),
        archive: state.archive.filter((item) => item.id !== action.payload.id)
      };

    case "REMOVE_FROM_TRASH_NOTES":
      return {
        ...state,
        trash: state.trash.filter((item) => action.payload.id !== item.id),
        notes: state.notes.concat(action.payload)
      };

    case "REMOVE_ALL_TRASH_NOTES":
      return {
        ...state,
        trash: []
      };

    case "ADD_TO_PIN_NOTES":
      return {
        ...state,
        pin: state.pin.concat(action.payload),
        notes: state.notes.filter((item) => item.id !== action.payload.id),
        archive: state.archive.filter((item) => item.id !== action.payload.id)
      };

    case "REMOVE_FROM_PIN_NOTES":
      return {
        ...state,
        pin: state.pin.filter((item) => action.payload.id !== item.id),
        notes: state.notes.concat(action.payload)
      };

    default:
      return state;
  }
}
