import Link from "next/link";
import React from "react";
import styles from "./links.module.css"
import NavLinks from "./navLink/navLinks";
const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  

  return (
    <div  className={styles.links}>
      {links.map((link => (
        <Link  key={link.title} href={link.path}>
<NavLinks item={link} key={link.title}/>
        </Link>
      )))}
    </div>
  );
};

export default Links;
