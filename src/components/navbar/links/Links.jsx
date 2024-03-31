import Link from "next/link";
import React from "react";
import styles from "./links.module.css";
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

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.title} href={link.path}>
          <NavLinks item={link} key={link.title} />
        </Link>
      ))}

      {session ? (
        <>

   {/* 
  So he is just pushing a new obj in the item, it's like pushing a conditional into an array. 
  There are different ways of doing this, just like that 'active' parameter thing in NavLinks.
*/}

          {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />} 
          <button className={styles.logout}>Logout</button>{" "}
        </>
      ) : (
        <>

          <NavLinks item={{ title: "Login", path: "/login" }} />{" "}
        </>
      )}
    </div>
  );
};

export default Links;
