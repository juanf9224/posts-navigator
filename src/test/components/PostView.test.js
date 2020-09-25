import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { PostView } from "../../components/PostView";
import TestProvider from "../fixtures/TestProvider";
import posts from '../fixtures/posts';

describe("PostView component test suite", () => {
  let comp, filterResults, pagination, totalItems, setPaginationFilters;

  beforeEach(() => {
    filterResults = { posts, matching: null }
    pagination = {
      pageNumber: 1,
      itemsPerPage: 10,
      total: 100,
    };
    setPaginationFilters = jest.fn();
    totalItems = 100;
    comp = render(
      <TestProvider>
        <PostView
          filterResults={filterResults}
          pagination={pagination}
          totalItems={totalItems}
          setPaginationFilters={setPaginationFilters}
        />
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

  it('should update pagination filters on page change', async () => {
    const paginationComp = await screen.findByTestId('pagination-comp');
        
    expect(paginationComp).toBeTruthy();
    fireEvent.change(paginationComp, {
      page: 3
    });
    waitFor(() => expect(setPaginationFilters).toHaveBeenCalledTimes(1));
  });
});
