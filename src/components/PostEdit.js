import React, { useState } from "react";
import { connect } from "react-redux";

import { editPostAction } from '../actions/posts';
import { setSelectedPost } from '../actions/selected-post';

const PostEdit = ({ setIsEdit, selectedPost, editPostAction, setSelectedPost }) => {
  const [postTitle, setPostTitle] = useState(selectedPost.title);
  const [postBody, setPostBody] = useState(selectedPost.body);

  const onSaveHandler = () => {
    const update = { title: postTitle, body: postBody };
    editPostAction(selectedPost.id, update );
    setSelectedPost({ ...selectedPost, ...update });
    setIsEdit(false);
  }

  return (
    <div className="card-layout">
      <div className="card-layout__content">
        <div className="card-layout__content__title">
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          ></input>
        </div>
        <div className="card-layout__content__body">
          <textarea
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></textarea>
        </div>
        <div className="card-layout__content__footer">
          <button className="btn btn-primary" onClick={onSaveHandler}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  editPostAction: (id, update) => dispatch(editPostAction(id, update)),
  setSelectedPost: (update) => dispatch(setSelectedPost(update)),
});

const mapStateToProps = (state) => {
  return {
    selectedPost: state.selectedPost,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
