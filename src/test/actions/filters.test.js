import { setTextFilter } from '../../actions/filters';

test('should setup setTextFilter action with text', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  });
});
