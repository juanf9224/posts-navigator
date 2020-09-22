import React from "react";
import { shallow } from "enzyme";

import Header from "../../components/Header";

describe("Header component test suite", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
