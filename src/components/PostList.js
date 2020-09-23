import React, { useContext } from 'react';

import Post from './Post';
import AutocompleteContext from "../context/autocomplete";

const PostsList = ({ listRef }) => {
  const {
    filteredPosts
  } = useContext(AutocompleteContext);

  const containsPosts = (filteredPosts && filteredPosts.length && filteredPosts);
  return (
    <ul ref={listRef}>
      {containsPosts
        ? filteredPosts.map((i) => (
            <Post
              key={i.id}
              post={i}
            />
          ))
        : null
      }
    </ul>
  );
};

export { PostsList as default };