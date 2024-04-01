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
import { usePathname, useRouter, useSearchParams } from "next/navigation"

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

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});

//{revalidate:3600} will refesh your data evey 1 hour = 3600
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate:3600}});

```

```js
//this will take in dynamic id giving by the blog from the api
 <Link className={styles.link}href={`/blog/${post.id}`}> 
        READ MORE
      </Link>

      ```