
import posts from '../fixtures/posts';
import postReducer, { postsReducerDefaultState } from '../../reducers/posts';

test('should edit an post', () => {
  const title = 'None shall pass';
  const action = {
    type: 'EDIT_POST',
    id: posts[1].id,
    update: {
      title
    }
  };
  const state = postReducer({ items: posts, error: '' }, action);
  expect(state.items[1].title).toBe(title);
});



test("should GET posts", () => {
  const action = {
    type: "GET_POSTS"
  };
  const state = postReducer({ items: posts, error: "" }, action);
  expect(state.items).toEqual(posts);
});