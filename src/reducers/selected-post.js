const postsReducerDefaultState = null;

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_SELECTED_POST":
      return action.post;
    default:
      return state;
  }
};
