/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent, waitFor, screen } from  '@testing-library/react';

import { Autocomplete } from '../../components/Autocomplete';
import TestProvider from '../fixtures/TestProvider';
import postList from '../fixtures/posts';


describe('Autocomplete component test suite', () => {
  let posts, comp, mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    posts = postList;
    comp = render(
      <TestProvider>
        <Autocomplete posts={posts} setTextFilter={mockFn} />
      </TestProvider>
    );
  });

  it('it should render successfully', () => {
    expect(comp.container).toBeTruthy();
  });

  it('it should update text filter correctly', async () => {
    const { findByTestId } = comp;
    const searchInput = await findByTestId('search-input');

    fireEvent.change(searchInput, {
      target: { value: 'sunt' },
    });
    
    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('sunt');
    });
  });

  it("it should populate datalis correctly", async () => {
    const dataList = await screen.findByTestId('autocomplete-data-list');
    
    expect(dataList).toBeTruthy();
    const dataListValues = [...dataList.children].map(c => c.value);
    const postValues = postList.map(p => p.title);
    expect(dataListValues).toEqual(postValues);
  });
});
