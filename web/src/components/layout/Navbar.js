import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Projects",
      url: "/projects",
    },
    {
      text: "Resources",
      url: "/resources",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];

  const styles = {
    link:
      "mx-2 my-2 text-lg font-light px-3.5 hover:text-purple-500 transition duration-200",
    activeLink: "text-white my-gradient inline-block transform -skew-y-3",
  };
  // text-white bg-purple-700 inline-block transform -rotate-3
  // border-b-4 border-purple-700

  return (
    <nav className="flex flex-col items-center mb-10">
      <h1 className="text-3xl font-semibold text-gray-700">
        <Link to="/" className="text-4xl font-bold cursor-pointer font-title">
          Sergio M. Barria
        </Link>
      </h1>
      <h2 className="mb-4 text-2xl font-normal leading-7 text-center">
        Full-stack Web Developer
      </h2>
      <ul className="flex flex-wrap items-center justify-center leading-10">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            {link.text}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
