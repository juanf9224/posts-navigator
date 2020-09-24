
import editDialogReducer, { editDialogReducerDefaultState } from '../../reducers/edit-dialog';
import showDialogMock from '../fixtures/edit-dialog';

describe('Edit Dialog Reducer test suite', () => {
  test("should handle initial state", () => {
    const action = {
      type: "SHOW_EDIT_DIALOG",
    };
    const state = editDialogReducer(editDialogReducerDefaultState, action);
    expect(state.isOpen).toBe(true);
  });

  test("should show the editDialog", () => {
    const action = {
      type: "SHOW_EDIT_DIALOG",
    };
    const state = editDialogReducer(editDialogReducerDefaultState, action);
    expect(state.isOpen).toBe(true);
  });

  test("should hide the editDialog", () => {
    const action = {
      type: "HIDE_EDIT_DIALOG",
    };
    const state = editDialogReducer(editDialogReducerDefaultState, action);
    expect(state).toEqual(editDialogReducerDefaultState);
  });

  test("should handle the edit post", () => {
    const action = {
      type: "EDIT_POST_DIALOG",
      post: showDialogMock,
    };
    const state = editDialogReducer(editDialogReducerDefaultState, action);
    expect(state).toEqual({
      ...showDialogMock,
    });
  });
});