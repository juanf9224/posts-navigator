
import posts from '../fixtures/posts';
import postReducer from '../../reducers/posts';

test('should edit an post', () => {
  const title = 'None shall pass';
  const action = {
    type: 'EDIT_POST',
    id: posts[1].id,
    update: {
      title
    }
  };
  const state = postReducer(posts, action);
  expect(state[1].title).toBe(title);
});



test("should set posts", () => {
  const action = {
    type: "SET_POSTS",
    posts: [posts[1]],
  };
  const state = postReducer(posts, action);
  expect(state).toEqual([posts[1]]);
});