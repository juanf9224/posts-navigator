import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { expect, server, BASE_URL } from './setup';
import { posts } from './fixtures/posts';

const mock = new MockAdapter(axios);

mock.onGet('http://jsonplaceholder.typicode.com/posts').reply(200, posts);

describe('Posts test', () => {
  it('gets posts from typicode and send them to the client', (done) => {
    server
      .get(`${BASE_URL}/posts`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data[0]).to.deep.equal(posts[0]);
        done();
      });
  });
});
