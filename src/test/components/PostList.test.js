import React from "react";
import { shallow } from "enzyme";

import PostList from "../../components/PostList";
import AutocompleteContext from "../../context/autocomplete";
import posts from '../fixtures/posts';

describe("PostList component test suite", () => {  
  let wrapper, listRef, filteredPosts;

  beforeEach(() => {
    listRef = {};
    filteredPosts = posts;
    wrapper = shallow(
      <AutocompleteContext.Provider value={{ filteredPosts }}>
        <PostList listRef={listRef}/>
      </AutocompleteContext.Provider>
    );
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
