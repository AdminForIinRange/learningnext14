
import {Post, User} from "./models"

import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// Fetching all the posts from the mock API
export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return post 
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Get Post(s):  `" + error + "`");
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
        throw new Error("Failed to Get User:  `" + error + "`");
      }
};


export const getUsers = async (id) => {
    try {
        connectToDb()
        const user = await User.findById()
        return user 
      } catch (error) {
        console.log(error);
        throw new Error("Failed to Get User(s):  `" + error + "`");
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
