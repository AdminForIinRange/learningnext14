import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

// FETCH DATA WITH AN API

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",  {next: {revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  const posts = await getData()
  return (
    <div className={styles.container}>
     {posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default BlogPage;
