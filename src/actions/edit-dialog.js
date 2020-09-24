// SHOW_EDIT_DIALOG
export const showEditDialog = () => ({
  type: "SHOW_EDIT_DIALOG"
});

// HIDE_EDIT_DIALOG
export const hideEditDialog = () => ({
  type: "HIDE_EDIT_DIALOG"
});

// EDIT_DIALOG
export const editDialog = (post) => ({
  type: "EDIT_POST_DIALOG",
  post,
});
