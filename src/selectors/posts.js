export default (posts, text) => {
  const filteredPosts = posts.filter((p) => p.title.includes(text));
  return filteredPosts;
}
