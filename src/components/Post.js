import React, { useContext } from 'react';

import AutocompleteContext from '../context/autocomplete';

const Post = ({ post }) => {
  const { handleSuggestionClick, activeSuggestion } = useContext(AutocompleteContext);
  const { idx, id } = activeSuggestion;
  return (
    <li
      onClick={() =>
        handleSuggestionClick({ id: post.id, title: post.title })
      }
      className={
        idx > -1 && post.id === id ? "is-active post-item" : "post-item"
      }
    >
      <div className="post-item__title">{post.title}</div>
    </li>
  );
};
export { Post as default };