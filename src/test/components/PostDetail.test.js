/* eslint-disable react/prop-types */
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { PostDetail } from "../../components/PostDetail";
import TestProvider from "../fixtures/TestProvider";
import posts from "../fixtures/posts";

describe("PostDetail component test suite", () => {
  let mockFn, comp;

  beforeEach(() => {
    mockFn = jest.fn();
    comp = render(
      <TestProvider>
        <PostDetail {...posts[0]} openEditDialog={mockFn} />
      </TestProvider>
    );
  });

  it("should render successfully", () => {
    expect(comp.container).toBeTruthy();
  });

  it("should invoke openDialog function when edit btn is clicked", async () => {
    const { findByTestId } = comp;

    const editBtn = await findByTestId('edit-post-btn');
    fireEvent.click(editBtn);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(posts[0]);
  });
});
