/* eslint-disable react/prop-types */
import React from "react";
import { render, fireEvent, waitForElement, act } from "@testing-library/react";

import { PostDetail } from "../../components/PostDetail";
import TestProvider from "../fixtures/TestProvider";
import posts from "../fixtures/posts";

describe("PostDetail component test suite", () => {
  let openEditDialog = jest.fn();

  it("should render successfully", () => {
    const comp = render(
      <TestProvider>
        <PostDetail {...posts[0]} openEditDialog={openEditDialog} />
      </TestProvider>
    );

    expect(comp.container).toBeTruthy();
  });

  it("should invoke openDialog function when edit btn is clicked", async () => {
    const mockFn = jest.fn();
    const comp = render(
      <TestProvider>
        <PostDetail {...posts[0]} openEditDialog={mockFn} />
      </TestProvider>
    );
    const { getByTestId } = comp;


    const editBtn = await waitForElement(() => getByTestId('edit-post-btn'));

    act(() => {
      fireEvent.click(editBtn);
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(posts[0]);
  });
});
