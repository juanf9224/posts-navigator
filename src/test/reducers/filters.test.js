import filtersReducer, { filtersReducerDefaultState } from '../../reducers/filters';

test('should setup setTextFilter action with text', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'test'
  };
  const state = filtersReducer(filtersReducerDefaultState, action);
  expect(state.text).toBe('test');
});
