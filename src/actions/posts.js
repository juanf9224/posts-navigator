
import { searchPosts } from '../services/post.service';

// GET_POSTS
export const getPosts = (posts) => ({
  type: 'GET_POSTS',
  posts
});

export const startSetPosts = () => {
  return (dispatch, getState) => {
    return searchPosts().then((res) => {
      dispatch(getPosts(res));
    });
  };
};

// EDIT_POST
export const editPostAction = (id, update) => ({
  type: 'EDIT_POST',
  id,
  update
});


export const getPostsSuccess = (payload) => ({
  type: 'GET_POSTS_SUCCESS',
  payload,
});
export const getPostsError = (payload) => ({ type: 'GET_POSTS_ERROR', payload });


