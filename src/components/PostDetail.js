/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';

export const PostDetail = ({ setIsEdit, selectedPost }) => {
  const [post, setPost] = useState(selectedPost);

  useEffect(() => {
    if (selectedPost) {
      setPost(post);
    }
  }, [selectedPost]);

  return (
    <div className="card-layout">
      <div className="card-layout__content">
        <div className="card-layout__content__title">
          <h1>{post.title}</h1>
        </div>
        <div className="card-layout__content__body">
          <p>{post.body}</p>
        </div>
        <div className="card-layout__content__footer">
          <button className="btn btn-secondary" onClick={() => setIsEdit(true)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedPost: state.selectedPost
  }
};

export default connect(mapStateToProps)(PostDetail);
