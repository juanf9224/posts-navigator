import React, { Fragment, useState } from "react";

import PostEdit from './PostEdit';
import PostDetail from './PostDetail';

const PostView = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Fragment>
      {isEdit ? (
        <PostEdit setIsEdit={setIsEdit} />
      ) : (
        <PostDetail setIsEdit={setIsEdit} />
      )}
    </Fragment>
  );
};

export { PostView as default };
