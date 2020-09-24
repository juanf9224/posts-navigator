export default (posts, { text }) => {
  if (!text) return posts;
  const filteredPosts =
    posts && posts.filter((p) => p.title.includes(text));
  return filteredPosts;
};
