export const editDialogReducerDefaultState = {
  id: 0,
  title: '',
  body: '',
  isOpen: false
};

export default (state = editDialogReducerDefaultState, action) => {
  switch (action.type) {
    case "SHOW_EDIT_DIALOG":
      return {
        ...state,
        isOpen: true
      };
    case "HIDE_EDIT_DIALOG":
      return {
        ...state,
        ...editDialogReducerDefaultState,
      };
    case "EDIT_POST_DIALOG":
      return {
        ...state,
        ...action.post,
        isOpen: true
      };
    default:
      return state;
  }
};
