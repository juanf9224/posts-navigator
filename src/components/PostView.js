import React, { Fragment, useState } from "react";

import PostEdit from './PostEdit';
import PostDetail from './PostDetail';

const PostView = (post) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Fragment>
      {isEdit ? (
        <PostEdit {...post} setIsEdit={setIsEdit} />
      ) : (
        <PostDetail {...post} setIsEdit={setIsEdit} />
      )}
    </Fragment>
  );
};

export { PostView as default };
