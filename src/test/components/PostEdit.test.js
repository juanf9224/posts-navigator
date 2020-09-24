import React from "react";
import { render, fireEvent, waitForElement, act } from "@testing-library/react";

import { PostEdit } from "../../components/PostEdit";
import TestProvider from "../fixtures/TestProvider";
import posts from "../fixtures/posts";

describe("PostEdit component test suite", () => {
  let editDialog, editPostAction, closeDialog;

  beforeEach(() => {
    editDialog = {
      ...posts[0],
      isOpen: true
    };
    editPostAction = jest.fn();
    closeDialog = jest.fn();
  });

  it("should render successfully", () => {
    const comp = render(
      <TestProvider>
        <PostEdit
          editDialog={editDialog}
          editPostAction={editPostAction}
          closeDialog={closeDialog}
        />
      </TestProvider>
    );

    expect(comp.container).toBeTruthy();
  });

  it("should have the save button disabled", async () => {
    const comp = render(
      <TestProvider>
        <PostEdit
          editDialog={editDialog}
          editPostAction={editPostAction}
          closeDialog={closeDialog}
        />
      </TestProvider>
    );
    const { getByTestId } = comp;

    const saveBtn = await waitForElement(() => getByTestId("save-btn"));
    const postBody = await waitForElement(() => getByTestId("post-body"));
    const postTitle = await waitForElement(() => getByTestId("post-title"));
    
    expect(postTitle.value).toBe(editDialog.title);
    expect(postBody.value).toBe(editDialog.body);
    expect(saveBtn.disabled).toBe(true);
  });  

  it("should not have the save button disabled", async () => {
    const comp = render(
      <TestProvider>
        <PostEdit
          editDialog={editDialog}
          editPostAction={editPostAction}
          closeDialog={closeDialog}
        />
      </TestProvider>
    );
    const { getByTestId } = comp;

    const saveBtn = await waitForElement(() => getByTestId("save-btn"));
    const postBody = await waitForElement(() => getByTestId("post-body"));
    const postTitle = await waitForElement(() => getByTestId("post-title"));

    act(() => {
      fireEvent.change(postBody, {
        target: { value: "blabblablablablablablabla" },
      });
    });

    expect(postTitle.value).toBe(editDialog.title);
    expect(postBody.value).not.toBe(editDialog.body);
    expect(saveBtn.disabled).toBe(false);
  });

  it("should invoke the editPostAction", async () => {
    const val = "test value";
    const comp = render(
      <TestProvider>
        <PostEdit
          editDialog={editDialog}
          editPostAction={editPostAction}
          closeDialog={closeDialog}
        />
      </TestProvider>
    );
    const { getByTestId } = comp;

    const saveBtn = await waitForElement(() => getByTestId("save-btn"));
    const postBody = await waitForElement(() => getByTestId("post-body"));
    const postTitle = await waitForElement(() => getByTestId("post-title"));

    act(() => {
      fireEvent.change(postBody, {
        target: { value: val },
      });
      fireEvent.click(saveBtn);
    });

    setTimeout(() => {
      expect(editPostAction).toHaveBeenCalledTimes(1);
      expect(editPostAction).toHaveBeenCalledWith(editDialog.id, {
        title: postTitle,
        body: postBody,
      });
    }, 100);
  });
});
