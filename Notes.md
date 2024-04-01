\*\*\* Read

```js
// It's very important to follow proper Next.js naming conventions; otherwise, Next.js may not compile correctly, and you may run into unwanted performance issues.

// If you run into any issues, remember to restart your development server and review the names and issues.
```

```JS

// If you ever get stuck on hydration, watch Timestamp 1:58.

// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;


```



```JS




// It's like using Navigate("/Auth") in React via react-router-dom, but it's better in Next.js because of its flexibility and simple functionality. Timestamp: 2:08 (watch the section; it's pretty interesting, forcing users to shift routes and qurry'ing and its pretty simple code ).





"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation" //updated and higher vir import dont forget Next/<import> is always recomened

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const q = searchParams.get("q")

  console.log(q)  // The URL is "/navigation?q=test". Basically, he's just getting the query, which is great for filtering and searching within your site.

  const handleClick = ()=>{
    console.log("clicked")
    router.forward()
  }

  return (
    <div>
      <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage
```

```js
//dont use  {cache: "no-store"} when you have large ammounst fo data changing, but if your data is retaibly conststant with minro changes then use it,

const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  cache: "no-store",
});

//{revalidate:3600} will refesh your data evey 1 hour = 3600
const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  next: { revalidate: 3600 },
});
```

```js
// cool concept:
// since the each blog holds all of teh json place holder inc teh user id and id, by linking }href={`/blog/${post.id}`}
// we can get the id from each post and travel inside of it
//THIS IS ONLY POSSIBLE BECAUSE OF THE WAY THE BLONDE FILES ARE STORED, AND THE SLUG

//this will take in dynamic id giving by the blog from the api
<Link className={styles.link} href={`/blog/${post.id}`}>
  READ MORE
</Link>
```

```js


// In Next.js, when using dynamic routes, you can access the route parameters (like the slug or post ID) through the params object in the page component's props. This is part of Next.js's built-in functionality for handling dynamic routes.

const SinglePostPage = async ({ params }) => { // using params, slug is passed as a parameter its a buit in function in nextjs

const {slug} = params
  const posts = await getData(slug) //passing slug as a parameter in side getdata (fetch func), slug's raw value is /blog/[slug]

//   The params object allows you to access the dynamic route parameters passed to the page component in Next.js.

```

```js
import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`); // using slug as a parameter
  // THIS WHOEL API IS STURCTED AROUND USER, POST'S AND OTHER DATA YOU WOULD SEE IN SOCIAL MEDIA
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  // using params, slug is passed as a parameter its a buit in function in nextjs

  const { slug } = params;
  const posts = await getData(slug); //passing slug as a parameter in side getdata, slug's raw value is /blog/[slug]

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
        <h1 className={styles.title}> {posts.title} </h1>
        <div className={styles.detail}>

        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={posts.userId} />
            
            </Suspense>
          {/*  passing userId from  `https://jsonplaceholder.typicode.com/posts/` allowing me to access a single post from the api */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>aUTHOR</span>
            <span className={styles.detailValue}>detailValue</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>detailValue</span>
          </div>
        </div>
        <div className={styles.content}>{posts.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

```

```js
//Powerful stuff

// src\lib\data.js

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
export const getPosts = async () => {
  return posts
}

export const getPost = async (id) => {
    return posts.find((post) => post.id === id)
  }
  
  export const getUser = async (id) => {
    return posts.find((post) => post.id === id)
  }


//src\app\blog\page.jsx 

import { getPosts } from "@/lib/data";

const BlogPage = async () => {

const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

```

```js
// Don't pay attention to this code too much; it's just an example of how you can communicate code between data (node) to next.js + App and Components , rather than using fetching an API within the page's .jsx. It's cleaner to put all functional code in your lib/data.js.


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

```


//after login and createing a projecrt and creating a cluster you gotta press connect and follow the instruction 
-npm install mongodb 

-mongodb+srv://bhattaraianjesh123:<password>@cluster0.l7tduy7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


```js

// simple boilerplate code:  boilerplate code means you don't have to memorize it

const mongoose = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {

    if (connection.isConnected) {
        console.log("using an existing connection")
      return;
    }
    
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to MongoDB:  `" + error + "`");
  }
};

```

```js
// So, I found out that your .env file must not contain white spaces. My mistake was having a space between '=' because I assumed it was a normal variable declaration.

MONGO_URI="" // correct 

MONGO_URI = "" // incorrect 

```



```js

//common tut miskate
//he keeps reandeirng 

{post?.desc}

//and at time i forget to add ? and my whole program falls into errors

```


```js

```



```js

```





```js

```






```js

```






```js

```





```js

```





```js

```
