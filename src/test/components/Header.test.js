import React from "react";
import { render } from "@testing-library/react";

import Header from "../../components/Header";
import TestProvider from "../fixtures/TestProvider";

describe("Header component test suite", () => {  

  it('it should render successfully', () => {
    const comp = render(
      <TestProvider>
        <Header />
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });
});
