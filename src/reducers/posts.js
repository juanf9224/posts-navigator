const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case "EDIT_POST":
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.update,
          };
        } else {
          return post;
        }
      });
    case "SET_POSTS":
      return action.posts;
    default:
      return state;
  }
};