import React from "react";
import { shallow } from "enzyme";

import { PostEdit } from "../../components/PostEdit";
import posts from "../fixtures/posts";

describe("PostEdit component test suite", () => {
  let wrapper, setIsEdit, selectedPost, editPostAction, setSelectedPost;

  beforeEach(() => {
    setIsEdit = jest.fn();
    editPostAction = jest.fn();
    setSelectedPost = jest.fn();
    selectedPost = posts[0];
    wrapper = shallow(
      <PostEdit
        selectedPost={selectedPost}
        setIsEdit={setIsEdit}
        editPostAction={editPostAction}
        setSelectedPost={setSelectedPost}
      />
    );
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
