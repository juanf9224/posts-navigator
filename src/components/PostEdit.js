import React, { useContext } from "react";

const PostEdit = ({ id, title, body, setIsEdit }) => {
  return (
    <div className="card-layout">
      <div className="card-layout__content">
        <div className="card-layout__content__title">
          <input type="text" value={title}></input>
        </div>
        <div className="card-layout__content__body">
          <textarea>{body}</textarea>
        </div>
        <div className="card-layout__content__footer">
          <button class="btn-primary" onClick={() => setIsEdit(false)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { PostEdit as default };
