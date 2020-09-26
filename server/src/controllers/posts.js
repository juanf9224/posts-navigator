import axios from 'axios';

/**
 * Gets posts from typicode api and send them to the client
 * @param {*} req
 * @param {*} res
 */
export const getPosts = async (req, res) => {
  try {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/posts'
    );
    res.status(200).json({ data: response.data });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
