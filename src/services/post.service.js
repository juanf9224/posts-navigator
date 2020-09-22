// Endpoint base url
const url = 'http://jsonplaceholder.typicode.com/posts';

/**
 * Endpoint to fetch posts
 * @param {string} text 
 */
const searchPosts = async () => {
  return await fetch(`${url}`)
    .then((res) => res.json());
};

/**
 * Endpoint to edit posts
 * @param {number} id
 * @param {Object} payload
 */
const editPost = async (id, payload) => {
  const req = new Request(`${url}/${id}`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: payload
  });
  return await fetch(req).then((res) => res.json());
};

export { searchPosts, editPost };