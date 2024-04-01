
import {Post} from "../models/Post"
import {User} from "../models/User"
import { connectToDb } from "./connectTodb";
 
// Fetching all the posts from the mock API
export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return post 
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Get Post:  `" + error + "`");
  }
};

// Fetching a single post from the mock API
export const getPost = async (id) => {
    try {
        connectToDb()
        const post = await Post.find({slug: slug})
        return post 
      } catch (error) {
        console.log(error);
        throw new Error("Failed to Get Post:  `" + error + "`");
      }
};

// Fetching a user from the mock API
export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id)
        return user 
      } catch (error) {
        console.log(error);
        throw new Error("Failed to Get Post:  `" + error + "`");
      }
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
