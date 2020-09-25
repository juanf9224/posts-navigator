import selectPosts from '../../selectors/posts';
import posts from '../fixtures/posts';

describe('Posts selector test suite', () => {

  test('should return matching posts', () => {
    const filters = {
      text: 'hello',
      pagination: {
        pageNumber: 1,
        itemsPerPage: 10,
        total: 100,
      }
    };

    const result = selectPosts(posts, filters);
    expect(result.posts).toEqual([posts[0], posts[1]]);
  });
});