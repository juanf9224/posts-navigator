// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});
// SET_PAGINATION_FILTERS
export const setPaginationFilters = ({
  pageNumber = 1,
  itemsPerPage = 10,
  total = 0,
}) => ({
  type: 'SET_PAGINATION_FILTERS',
  payload: {
    pageNumber,
    itemsPerPage,
    total,
  },
});
