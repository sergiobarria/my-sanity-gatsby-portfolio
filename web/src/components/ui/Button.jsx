import React from 'react';
import { Link } from 'gatsby';

const Button = ({ url, text, transparent }) => {
  const styles = {
    btn:
      'uppercase px-4 py-2 tracking-widest font-semibold text-white my-gradient rounded-lg md:text-xl cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out',
    btnTransparent:
      'uppercase px-4 py-2 tracking-widest font-semibold text-gradient my-gradient border border-blue-400 rounded-lg md:text-xl cursor-pointer transform hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out',
  };

  return (
    <Link
      to={url}
      className={`${transparent ? styles.btnTransparent : styles.btn}`}
    >
      {text}
    </Link>
  );
};

export default Button;
