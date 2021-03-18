import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Project = props => {
  const {
    // id,
    title,
    // description,
    // data,
    tags,
    // projectType,
    link,
    mainImage,
  } = props;
  return (
    <article className="max-w-md mx-auto overflow-hidden transition-all duration-300 ease-in-out transform rounded-md shadow-md lg:max-w-5xl hover:scale-110 hover:shadow-xl">
      {mainImage && (
        <GatsbyImage image={mainImage.asset.gatsbyImageData} alt={title} />
      )}

      <div className="p-4 pr-4">
        <div className="h-auto text-center">
          <h5 className="text-xl font-semibold">{title}</h5>
        </div>

        <div className="flex justify-around py-2 text-center opacity-70">
          {tags &&
            tags.map((tag, index) => (
              <p
                key={index} // eslint-disable-line
                className="px-3 py-1 mb-2 text-sm font-medium text-white rounded-sm my-gradient"
              >
                {tag}
              </p>
            ))}
        </div>

        <div className="text-right">
          <a
            href={link}
            className="font-semibold border-b border-blue-400 animate-pulse my-gradient text-gradient"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Live Demo &rarr;
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
