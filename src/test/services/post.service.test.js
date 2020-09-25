import * as api from '../../services/post.service';
import posts from '../fixtures/posts';

describe('posts sevice', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => jest.spyOn(window, 'fetch'));

  it('should fetch posts', async () => {
    const requestPosts = jest
      .spyOn(window, 'fetch')
      .mockImplementation(() => ({
        json: async () => Promise.resolve({ data: posts })
      }));

    const res = await api.searchPosts();
    expect(requestPosts).toHaveBeenCalledTimes(1);
    expect(res).toEqual(posts);
  });

  it('should call api and return error', async () => {
    const mockError = 'Not found';   
    const requestPosts = jest
      .spyOn(window, 'fetch')
      .mockImplementation(() => Promise.reject({ message: mockError }));

    try {
      await api.searchPosts();
    } catch (e) {      
      expect(requestPosts).toHaveBeenCalledTimes(1);     
      expect(e.message).toBe(mockError);
    }
  });
});
