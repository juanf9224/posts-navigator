import { setSelectedPost } from "../../actions/selected-post";

import posts from "../fixtures/posts";

test("should setup edit post action object with data", () => {
  const action = setSelectedPost({ id: 1, userId: 1, title: "hello", body: "new body" });
  expect(action).toEqual({
    type: "SET_SELECTED_POST",
    post: {
      id: 1,
      userId: 1,
      title: "hello",
      body: "new body",
    },
  });
});
