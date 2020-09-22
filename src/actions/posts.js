
import { searchPosts } from '../services/post.service';

// SET_POSTS
export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts
});

export const startSetPosts = () => {
  return (dispatch, getState) => {
    return searchPosts().then((posts) => {
      dispatch(setPosts(posts));
    });
  };
};

// EDIT_POST
export const editPostAction = (id, update) => ({
  type: 'EDIT_POST',
  id,
  update
});


