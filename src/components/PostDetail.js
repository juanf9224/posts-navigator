import React, { useContext } from "react";

const PostDetail = ({ title, body, setIsEdit }) => {
  return (
    <div className="card-layout">
      <div className="card-layout__content">
        <div className="card-layout__content__title">
          <h1>{title}</h1>
        </div>
        <div className="card-layout__content__body">
          <p>{body}</p>
        </div>
        <div className="card-layout__content__footer">
          <button class="btn-secondary" onClick={() => setIsEdit(true)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export { PostDetail as default };
