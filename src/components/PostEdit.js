/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from '@material-ui/core';

import { editPostAction } from '../actions/posts';
import { hideEditDialog } from "../actions/edit-dialog";
import { setTextFilter } from '../actions/filters';

const useStyles = makeStyles(() => createStyles({
  editDialog: {
    minWidth: '50%'
  },
  editDialog__body: {
    textAlign: 'justify'
  },
  textField__label: {
    fontSize: '1.2rem'
  }
}));

export const PostEdit = ({ editDialog, editPostAction, closeDialog, setTextFilter }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [disabled, setDisabled] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const { title, body } = editDialog;
    setPostTitle(title);
    setPostBody(body);
  }, [editDialog]);

  useEffect(() => {
    setDisabled(!isFormValid());
  }, [postTitle, postBody]);

  const onSaveHandler = () => {
    const { id } = editDialog;
    const update = { title: postTitle, body: postBody };
    const editedPost = editPostAction(id, update);
    setTextFilter(editedPost.update.title);
    closeDialog();
  }

  const isFormValid = () => {
    const { title, body } = editDialog;
    return (title !== postTitle || body !== postBody) && isFieldValid(postTitle) && isFieldValid(postBody);
  };

  const isFieldValid = (value) => value && value.length > 0;

  return (
    <Fragment>
      <Dialog
        open={editDialog.isOpen}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
        PaperProps={{ className: classes.editDialog }}
      >
        <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Here you can modify the title or body of this post.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            error={!isFieldValid(postTitle)}
            helperText={
              isFieldValid(postTitle) ? "" : `This field can't be empty`
            }
            InputLabelProps={{
              className: classes.textField__label,
            }}
            inputProps={{
              "data-testid": "post-title",
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="body"
            label="body"
            type="text"
            fullWidth
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            multiline
            error={!isFieldValid(postBody)}
            helperText={
              isFieldValid(postBody) ? "" : `This field can't be empty`
            }
            inputProps={{
              className: classes.editDialog__body,
              "data-testid": "post-body",
            }}
            InputLabelProps={{ className: classes.textField__label }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeDialog}
            color="primary"
            data-testid="cancel-btn"
            id="cancel-btn"
          >
            Cancel
          </Button>
          <Button
            onClick={onSaveHandler}
            color="primary"
            disabled={disabled}
            data-testid="save-btn"
            id="save-btn"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  editPostAction: (id, update) => dispatch(editPostAction(id, update)),
  closeDialog: () => dispatch(hideEditDialog()),  
  setTextFilter: (text) => dispatch(setTextFilter(text))
});

const mapStateToProps = (state) => {
  return {
    editDialog: state.editDialog
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
