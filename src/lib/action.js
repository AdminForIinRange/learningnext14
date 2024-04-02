import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  "use server";

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();

    console.log("new post added");
    revalidatePath(`/blog`); 
    // The revalidate option in Next.js refreshes the content 
    //of the page on the server-side, not in the browser.

  } catch (err) {
    console.log(err);
  }

  console.log(title, desc, slug, userId);
};
