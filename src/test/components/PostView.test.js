import React from "react";
import { shallow } from "enzyme";

import PostView from "../../components/PostView";
import AutocompleteContext from "../../context/autocomplete";

describe("PostView component test suite", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AutocompleteContext.Provider>
        <PostView />
      </AutocompleteContext.Provider>
    );
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
