import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); // using slug as a parameter
//   // THIS WHOEL API IS STURCTED AROUND USER, POST'S AND OTHER DATA YOU WOULD SEE IN SOCIAL MEDIA
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  // using params, slug is passed as a parameter its a buit in function in nextjs

  const { slug } = params;
  // const posts = await getData(slug);
  const post = await getPost(slug); //passing slug as a parameter in side getdata, slug's raw value is /blog/[slug]

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}> {post?.title} </h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          {/*  passing userId from  `https://jsonplaceholder.typicode.com/posts/` allowing me to access a single post from the api */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>aUTHOR</span>
            <span className={styles.detailValue}>detailValue</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
