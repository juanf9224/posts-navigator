import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { expect, server, BASE_URL } from './setup';
import { posts } from './fixtures/posts';

const mock = new MockAdapter(axios);


describe('Index test', () => {
  it('should get posts from typicode', async () => {
    mock.onGet('http://jsonplaceholder.typicode.com/posts').reply(200, posts);
    const res = await server
      .get(`${BASE_URL}/posts`)
      .expect(200);    
    expect(res.status).to.equal(200);
    expect(res.body.data[0]).to.deep.equal(posts[0]);
  });

  it('should return server error', async () => {
    mock
      .onGet('http://jsonplaceholder.typicode.com/posts')
      .reply(500, 'Internal server error');
    await server
      .get(`${BASE_URL}/posts`)
      .expect(500);
  });
});
