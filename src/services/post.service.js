// Endpoint base url
const url = process.env.REACT_APP_SERVER_URL;

/**
 * Endpoint to fetch posts
 * @param {string} text 
 */
const searchPosts = async () => {
  return await fetch(`${url}/v1/posts`, { mode: 'cors'})
    .then((res) => res.json());
};

export { searchPosts };