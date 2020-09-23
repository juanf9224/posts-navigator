import React from "react";
import { shallow } from "enzyme";

import Post from "../../components/Post";
import AutocompleteContext from '../../context/autocomplete';
import posts from '../fixtures/posts';

describe("Post component test suite", () => {
  let wrapper, handleSuggestionClick, activeSuggestion;

  beforeEach(() => {
    handleSuggestionClick = jest.fn();
    activeSuggestion = {idx: -1, id: undefined};
    wrapper = shallow(
      <AutocompleteContext.Provider value={{handleSuggestionClick, activeSuggestion}}>
        <Post post={posts[0]} />
      </AutocompleteContext.Provider>
    );
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
