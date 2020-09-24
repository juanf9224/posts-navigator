import React from "react";
import { render } from "@testing-library/react";

import PostsNavigatorApp from "../../components/PostsNavigatorApp";
import TestProvider from "../fixtures/TestProvider";

describe("PostsNavigatorApp component test suite", () => {

  it("it should render successfully", () => {
    const comp = render(
      <TestProvider>
        <PostsNavigatorApp />
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });

  it("should invoke getPost upon start", async () => {
    const mockFn = jest.fn();
    const comp = render(
      <TestProvider>
        <PostsNavigatorApp getPosts={mockFn} />
      </TestProvider>
    );
    setTimeout(() =>
      expect(mockFn).toHaveBeenCalledTimes(1)
      , 500
    );
  });
});
