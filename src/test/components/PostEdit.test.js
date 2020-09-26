import React from "react";
import { render, fireEvent, waitForElement, act, waitFor } from "@testing-library/react";

import { PostEdit } from "../../components/PostEdit";
import TestProvider from "../fixtures/TestProvider";
import posts from "../fixtures/posts";

describe("PostEdit component test suite", () => {
  let editDialog, editPostAction, closeDialog, comp, setTextFilter;

  beforeEach(() => {
    editDialog = {
      ...posts[0],
      isOpen: true
    };
    editPostAction = jest.fn();
    closeDialog = jest.fn();
    setTextFilter = jest.fn()
    comp = render(
      <TestProvider>
        <PostEdit
          editDialog={editDialog}
          editPostAction={editPostAction}
          closeDialog={closeDialog}
          setTextFilter={setTextFilter}
        />
      </TestProvider>
    );
  });

  it("should render successfully", () => {
    expect(comp.container).toBeTruthy();
  });

  it("should have the save button disabled", async () => {
    const { findByTestId } = comp;

    const saveBtn = await findByTestId('save-btn');
    const postBody = await findByTestId('post-body');
    const postTitle = await findByTestId('post-title');
    
    expect(postTitle.value).toBe(editDialog.title);
    expect(postBody.value).toBe(editDialog.body);
    expect(saveBtn.disabled).toBe(true);
  });  

  it("should not have the save button disabled", async () => {
    const { findByTestId } = comp;

    const saveBtn = await findByTestId('save-btn');
    const postBody = await findByTestId('post-body');
    const postTitle = await findByTestId('post-title');

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
    editPostAction.mockReturnValue({
            update: {
                title: 'val'
            }
        }
    );
    const val = "test value";
    const { findByTestId } = comp;

    const saveBtn = await findByTestId("save-btn");
    const body = await findByTestId('post-body');
    const title = await findByTestId('post-title');

    fireEvent.change(body, {
      target: { value: val },
    });

    fireEvent.change(title, {
      target: { value: val },
    });
    fireEvent.click(saveBtn);

    expect(body.value).toBe(val);
    expect(title.value).toBe(val);
    expect(editPostAction).toHaveBeenCalledTimes(1);
    expect(setTextFilter).toHaveBeenCalledTimes(1);
    expect(closeDialog).toHaveBeenCalledTimes(1);
  });
});
