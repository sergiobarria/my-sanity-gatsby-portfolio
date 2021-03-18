import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Post(props) {
  const {
    slug,
    mainImage,
    categories,
    title,
    excerpt,
    publishedAt,
    readTime,
  } = props;

  return (
    <Link to={`/blog/${slug.current}`}>
      <article className="mx-auto my-8 shadow-md md:grid md:grid-cols-12">
        <div className="relative md:col-span-4">
          {mainImage && (
            <GatsbyImage
              image={mainImage.asset.gatsbyImageData}
              alt={mainImage.alt}
              className="h-full"
              objectFit="cover"
            />
          )}
          <p className="absolute px-2 text-xs font-semibold text-white rounded-full top-2 right-2 my-gradient">
            {categories[0].title}
          </p>
        </div>

        <div className="p-2 md:col-span-8">
          <h4 className="pb-2 font-semibold prose lg:prose-lg">{title}</h4>
          <hr />
          <p className="py-2 prose">{excerpt[0].children[0].text}</p>
          <p className="flex items-center py-0 pl-1 my-0 text-xs border-l-2 border-yellow-600 lg:prose-sm">
            {publishedAt}{' '}
            <span className="text-2xl transform text-gradient my-gradient">
              &#8901;
            </span>{' '}
            {readTime} min Read
          </p>
        </div>
      </article>
    </Link>
  );
}
