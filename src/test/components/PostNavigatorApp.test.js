import React from 'react';
import { shallow } from 'enzyme';

import { PostsNavigatorApp } from "../../components/PostsNavigatorApp";

describe('PostNavigator component test suite', () => {
  let wrapper, startSetPosts;

  beforeEach(() => {
    startSetPosts = jest.fn();
    wrapper = shallow(<PostsNavigatorApp startSetPosts={startSetPosts} />);
  });

  test('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});