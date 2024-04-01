import React from "react";
import styles from "./postUser.module.css";
import Image from "next/image";

const data = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await data(userId);

  return (
    <div>
      <div className={styles.container}>
        <Image
          className={styles.avatar}
          src={userId ? "/noavatar.png" : "/noavatar.png"}
          alt=""
          width={50}
          height={50}
        />
        <div className={styles.texts}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default PostUser;
