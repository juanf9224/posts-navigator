import selectPosts from '../../selectors/posts';
import posts from '../fixtures/posts';

describe('Posts selector test suite', () => {

  test('should return matching posts', () => {
    const filters = {
      text: 'hello'
    }

    const result = selectPosts(posts, filters);
    expect(result).toEqual([posts[0], posts[1]]);
  });
});