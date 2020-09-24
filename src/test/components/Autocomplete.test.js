/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent, waitForElement, act } from  '@testing-library/react';

import { Autocomplete } from '../../components/Autocomplete';
import TestProvider from '../fixtures/TestProvider';
import postList from '../fixtures/posts';


describe('Autocomplete component test suite', () => {
  let posts, setTextFilter;

  beforeEach(() => {
    posts = postList;
    setTextFilter = jest.fn();
  });

  it('it should render successfully', () => {
    const comp = render(
      <TestProvider>
        <Autocomplete
          posts={[]}
          setTextFilter={setTextFilter}
        />
      </TestProvider>
    );
    expect(comp.container).toBeTruthy();
  });

  it('it should update text filter correctly', async () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <TestProvider>
        <Autocomplete
          posts={postList}
          setTextFilter={mockFn}
        />
      </TestProvider>
    );
    const searchInput = await waitForElement(() => getByTestId('search-input'));

    act(() => {
      fireEvent.change(searchInput, {
        target: { value: "sunt" },
      });
    });
    
    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith({
        text: "sunt",
      });
    }, 800);
  });

  it("it should populate datalis correctly", async () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <TestProvider>
        <Autocomplete posts={postList} setTextFilter={mockFn} />
      </TestProvider>
    );
    const dataList = await waitForElement(() =>
      getByTestId("autocomplete-data-list")
    );
    
    expect(dataList).toBeTruthy();
    const dataListValues = [...dataList.children].map(c => c.value);
    const postValues = postList.map(p => p.title);
    expect(dataListValues).toEqual(postValues);
  });
});
