import React from 'react';
import { shallow } from 'enzyme';

import PostsNavigatorApp from "../../components/PostsNavigatorApp";

describe('IssueNavigator component test suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PostsNavigatorApp />);
  });

  test('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});