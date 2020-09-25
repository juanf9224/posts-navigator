import React from "react";
import { render, waitForElement } from "@testing-library/react";

import { PostView } from "../../components/PostView";
import TestProvider from "../fixtures/TestProvider";
import posts from '../fixtures/posts';

describe("PostView component test suite", () => {
  let comp;

  beforeEach(() => {
    comp = render(
      <TestProvider>
        <PostView posts={posts} />
      </TestProvider>
    );
  });

  it('should render successfully', () => {
    expect(comp.container).toBeTruthy();
  });

  it("should populate post details", async () => {
    const { findAllByTestId } = comp;

    const postDetails = await findAllByTestId('post-detail');
    expect(postDetails).toBeTruthy();
    expect(postDetails.length).toBe(posts.length);
  });
});
