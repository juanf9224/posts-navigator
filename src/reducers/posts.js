export const postsReducerDefaultState = {
  items: [],
  error: ''
};

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_POST':
      return {
        ...state,
        items: state.items.map((post) => {
          if (post.id === action.id) {
            return {
              ...post,
              ...action.update,
            };
          }
          return post;
        })
      };
    case 'GET_POSTS':
      return {
        ...state,
      };
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        items: action.payload,
        error: '',
      };
    case 'GET_POSTS_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};