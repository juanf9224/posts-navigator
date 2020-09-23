import posts from '../fixtures/posts';
import selectedPostReducer from '../../reducers/selected-post'

test("should add an post", () => {
  const post = posts[1];
  const action = {
    type: "SET_SELECTED_POST",
    post,
  };
  const state = selectedPostReducer(post, action);
  expect(state).toEqual(post);
});
