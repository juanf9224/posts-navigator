import React from "react";
import { shallow } from "enzyme";

import PostDetail from "../../components/PostDetail";

describe("IssueDetail component test suite", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PostDetail />);
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
