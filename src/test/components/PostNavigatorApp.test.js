import React from "react";
import { render } from "@testing-library/react";

import { PostsNavigatorApp } from "../../components/PostsNavigatorApp";
import TestProvider from "../fixtures/TestProvider";

describe("PostsNavigatorApp component test suite", () => {
  let comp, mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    comp = render(
      <TestProvider>
        <PostsNavigatorApp getPosts={mockFn} />
      </TestProvider>
    );
  });

  it("it should render successfully", () => {
    expect(comp.container).toBeTruthy();
  });

  it("should invoke getPost upon start", async () => {
    expect(comp.container).toBeTruthy();
    expect(mockFn).toHaveBeenCalledTimes(1)
  });
});
