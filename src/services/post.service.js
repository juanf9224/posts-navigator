// Endpoint base url
const url = process.env.REACT_APP_SERVER_URL;

/**
 * Endpoint to fetch posts
 * @param {string} text 
 */
const searchPosts = async () => {
  const response = await fetch(`${url}/posts`, { mode: 'cors'})
  const data = await response.json();  
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { searchPosts };