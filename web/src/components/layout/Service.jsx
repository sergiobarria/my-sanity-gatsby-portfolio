import React from 'react';
import { FaCode, FaServer, FaAndroid } from 'react-icons/fa';

const Service = ({ id, title, text }) => {
  let icon;
  if (id === 1) {
    icon = <FaCode />;
  }
  if (id === 2) {
    icon = <FaServer />;
  }
  if (id === 3) {
    icon = <FaAndroid />;
  }

  return (
    <article
      className={`relative w-11/12 lg:w-10/12 h-auto mx-auto mt-10 ${
        id === 3 ? 'md:col-span-2 md:w-1/2' : ''
      }`}
    >
      <div
        className={`absolute inset-0 transform rounded-md shadow-lg my-gradient ${
          id === 3 ? '-rotate-6 md:-rotate-6 lg:-rotate-3' : '-rotate-6'
        }`}
      />
      <div className="relative h-full p-4 text-center bg-white rounded-md shadow-md lg:px-6">
        <div className="w-8 mx-auto mb-4 text-4xl text-yellow-500">{icon}</div>
        <h3 className="font-semibold lg:text-2xl">{title}</h3>
        <hr className="w-5/6 mx-auto my-2" />
        <p className="leading-7 text-center">{text}</p>
      </div>
    </article>
  );
};

export default Service;
