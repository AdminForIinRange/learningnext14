import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

// FETCH DATA WITH AN API

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  return (
    <div className={styles.container}>
      <PostCard />
      <PostCard />

      <PostCard />
    </div>
  );
};

export default BlogPage;
