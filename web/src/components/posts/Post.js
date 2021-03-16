import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Post(props) {
  return (
    <Link to={`/blog/${props.slug.current}`}>
      <article className="mx-auto my-8 shadow-md md:grid md:grid-cols-12">
        <div className="relative md:col-span-4">
          {props.mainImage && (
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
              className="h-full"
              objectFit="cover"
            />
          )}
          <p className="absolute px-2 font-semibold prose-sm text-white rounded-full top-2 right-2 my-gradient">
            {props.categories[0].title}
          </p>
        </div>

        <div className="p-2 md:col-span-8">
          <h4 className="pb-2 font-semibold prose lg:prose-lg">
            {props.title}
          </h4>
          <hr />
          <p className="py-2 prose-sm lg:prose-lg">
            {props.excerpt[0].children[0].text}
          </p>
          <p className="flex items-center py-0 pl-1 my-0 text-xs border-l-2 border-purple-600 lg:prose-sm">
            {props.publishedAt}{" "}
            <span className="text-2xl transform text-gradient my-gradient">
              &#8901;
            </span>{" "}
            {props.readTime} min Read
          </p>
        </div>
      </article>
    </Link>
  );
}
