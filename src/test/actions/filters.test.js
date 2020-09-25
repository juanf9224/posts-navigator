import {
  setPaginationFilters,
  setTextFilter,
} from '../../actions/filters';

describe('Filter action test suite', () => {

  it('should setup setTextFilter action with text', () => {
    const action = setTextFilter('test');
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'test'
    });
  });

  it('should setup setTextFilter action with text', () => {
    const pagination = {
      pageNumber: 1,
      itemsPerPage: 20,
      total: 200,
    };
    const action = setPaginationFilters(pagination);
    expect(action).toEqual({
      type: 'SET_PAGINATION_FILTERS',
      payload: pagination
    });
  });
});
