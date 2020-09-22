import React from "react";
import { shallow } from "enzyme";

import Autocomplete from "../../components/Autocomplete";

describe("Autocomplete component test suite", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Autocomplete />);
  });

  test("it should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
