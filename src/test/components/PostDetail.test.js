import React from "react";
import { shallow } from "enzyme";

import { PostDetail } from "../../components/PostDetail";
import posts from '../fixtures/posts';

describe("PostDetail component test suite", () => {
  let wrapper, setIsEdit, selectedPost;

  beforeEach(() => {
    setIsEdit = jest.fn();
    selectedPost = posts[0];
    wrapper = shallow(
      <PostDetail
        selectedPost={selectedPost}
        setSelectedPost={setIsEdit}
      />
    );
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
