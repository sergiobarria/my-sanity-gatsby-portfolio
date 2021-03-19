import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
  const links = [
    {
      id: 1,
      text: 'Home',
      url: '/',
    },
    {
      id: 2,
      text: 'About',
      url: '/about',
    },
    {
      id: 3,
      text: 'Blog',
      url: '/blog',
    },
    {
      id: 4,
      text: 'Projects',
      url: '/projects',
    },
    // {
    //   id: 5,
    //   text: 'Resources',
    //   url: '/resources',
    // },
    {
      id: 6,
      text: 'Contact',
      url: '/contact',
    },
  ];

  const styles = {
    link:
      'mx-2 my-2 text-lg font-light px-3.5 hover:text-blue-500 transition duration-200',
    activeLink: 'text-white my-gradient inline-block transform -skew-y-3',
  };

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
        {links.map(link => (
          <li key={link.id}>
            <Link
              to={link.url}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="w-full mt-4" />
    </nav>
  );
}
