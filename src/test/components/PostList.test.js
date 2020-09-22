import React from "react";
import { shallow } from "enzyme";

import PostList from "../../components/PostList";
import AutocompleteContext from "../../context/autocomplete";

describe("IssueList component test suite", () => {  
  let wrapper, filteredPosts;

  beforeEach(() => {
    filteredPosts = [];
    wrapper = shallow(
      <AutocompleteContext.Provider value={{ filteredPosts }}>
        <PostList />
      </AutocompleteContext.Provider>
    );
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
