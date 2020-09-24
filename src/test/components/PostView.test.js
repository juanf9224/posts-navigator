import React from "react";
import { render, waitForElement } from "@testing-library/react";

import PostView from "../../components/PostView";
import TestProvider from "../fixtures/TestProvider";
import posts from '../fixtures/posts';

describe("PostView component test suite", () => {

  it('should render successfully', () => {

    const comp = render(
      <TestProvider>
        <PostView posts={posts} />
      </TestProvider>
    );

    expect(comp.container).toBeTruthy();
  });

  it("should populate post details", async () => {
    const comp = render(
      <TestProvider>
        <PostView posts={posts} />
      </TestProvider>
    );

    const { queryAllByTestId } = comp;

    const postDetails = await waitForElement(() => queryAllByTestId('post-detail'));

    setTimeout(() => expect(postDetails.length).toBe(posts.length), 100);
  });
});
