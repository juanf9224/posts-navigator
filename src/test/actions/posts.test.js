import { editPostAction, getPosts } from "../../actions/posts";

import posts from '../fixtures/posts';

test("should setup edit post action object with data", () => {
  const action = editPostAction(1, {title: 'hello', body: 'new body'});
  expect(action).toEqual({
    type: "EDIT_POST",
    id: 1,
    update: {
      title: 'hello',
      body: 'new body'
    },
  });
});

test("should setup set post action object with data", () => {
  const action = getPosts(posts);
  expect(action).toEqual({
    type: "GET_POSTS",
    posts,
  });
});
