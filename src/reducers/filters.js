export const filtersReducerDefaultState = {
  text: '',
  pagination: {
    pageNumber: 1,
    itemsPerPage: 10,
    total: 0,    
  }
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_PAGINATION_FILTERS':
      return {
        ...state,
        pagination: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};
