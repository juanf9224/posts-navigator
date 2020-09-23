import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { editPostAction, setPosts } from "../../actions/posts";

import posts from '../fixtures/posts';

const uid = "thisismytestuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

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
  const action = setPosts(posts);
  expect(action).toEqual({
    type: "SET_POSTS",
    posts,
  });
});
