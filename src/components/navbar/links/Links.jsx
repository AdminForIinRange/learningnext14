"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";

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

  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.title} href={link.path}>
            <NavLink item={link} />
          </Link>
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.button}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button  className={styles.menuButton}  onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
