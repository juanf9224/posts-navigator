import React from "react";
import { shallow } from "enzyme";

import { Autocomplete } from "../../components/Autocomplete";
import postList from '../fixtures/posts';

let posts, selectedPost, setSelectedPost;

describe("Autocomplete component test suite", () => {
  posts = postList;
  selectedPost = posts[0];
  setSelectedPost = jest.fn();

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Autocomplete
      posts={posts}
      selectedPost={selectedPost}
      setSelectedPost={setSelectedPost} />);
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
