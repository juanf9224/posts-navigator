
import { showEditDialog, hideEditDialog, editDialog } from "../../actions/edit-dialog";
import editDialogMock from '../fixtures/edit-dialog';

describe("Edit Dialog Action Suite", () => {
  it("showEditDialog should dispatch SHOW_EDIT_DIALOG action", () => {
    expect(showEditDialog()).toEqual({
      type: 'SHOW_EDIT_DIALOG',
    });
  });

  it("hideEditDialog should dispatch SHOW_EDIT_DIALOG action", () => {
    expect(hideEditDialog()).toEqual({
      type: 'HIDE_EDIT_DIALOG',
    });
  });

  it("editDialog should update dialog form values", () => {
    expect(editDialog(editDialogMock)).toEqual({
      type: 'EDIT_POST_DIALOG',
      post: editDialogMock,
    });
  });
});