// Endpoint base url
const url = 'http://jsonplaceholder.typicode.com/posts';

/**
 * Endpoint to fetch posts
 * @param {string} text 
 */
const searchPosts = async (text) => {
  return await fetch(`${url}?title=${text}`)
    .then((res) => res.json());
};
export { searchPosts };