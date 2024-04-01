// Fetching all the posts from the mock API
export const getPosts = async () => {
  return posts; // returning all the posts
};

// Fetching a single post from the mock API
export const getPost = async (id) => {
  // finding the post based on the id
  const post = posts.find((post) => post.id === parseInt(id));

  // returning the found post
  return post;
};

// Fetching a user from the mock API
export const getUser = async (id) => {
  // finding the user based on the id
  const user = users.find((user) => user.id === parseInt(id));

  // returning the found user
  return user;
};

// Sample data
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: "......", userId: 1 },
  { id: 2, title: "Post 2", body: "......", userId: 1 },
  { id: 3, title: "Post 3", body: "......", userId: 2 },
  { id: 4, title: "Post 4", body: "......", userId: 2 },
];
