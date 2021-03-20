import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Share from '../components/analytics/Share';
import SEO from '../components/analytics/SEO';
import serializers from '../queries/serializers';

const BlogPostTemplate = ({ data }) => {
  const {
    title,
    mainImage,
    categories,
    publishedAt,
    bodyContent,
    slug,
    tags,
    keywords,
    authors,
    readTime,
  } = data.sanityPost;

  return (
    <>
      <SEO title={title} propKeywords={keywords} />
      <Layout>
        <Share
          url={`www.sergiobarria.com/blog/${slug.current}`}
          title={title}
        />
        <section className="container max-w-screen-md pb-10 mx-auto">
          <article className="p-4">
            <h1 className="pb-6 font-bold">{title}</h1>

            <div className="flex items-center mb-2">
              <p className="py-0 pl-4 my-0 border-l-2 border-purple-500">
                {categories[0].title}
              </p>
              <span className="px-2 py-0 my-0 text-2xl text-purple-500">
                &sdot;
              </span>
              <p>{readTime} min read</p>
            </div>

            <div className="flex flex-wrap">
              {tags &&
                tags.map((tag, index) => (
                  <span
                    key={index} // eslint-disable-line
                    className="px-4 mb-2 mr-4 text-white rounded-full my-gradient"
                  >
                    #{tag}
                  </span>
                ))}
            </div>

            <div className="flex items-center justify-between my-2">
              <p className="italic">By: {authors[0].author.name}</p>
              <p>{publishedAt}</p>
            </div>

            <div>
              {mainImage && (
                <GatsbyImage
                  image={mainImage.asset.gatsbyImageData}
                  alt={mainImage.alt}
                />
              )}
            </div>

            <div className="py-6 prose md:prose-lg lg:prose-xl">
              <BlockContent blocks={bodyContent} serializers={serializers} />
            </div>
          </article>

          <div className="flex items-center justify-center w-8/12 mx-auto mt-12 md:w-3/12">
            <Button text="More Posts" url="/blog" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query GetSinglePost($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      publishedAt(formatString: "MMMM DD, YYYY")
      tags
      slug {
        current
      }
      keywords
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
        alt
      }
      authors {
        author {
          name
          image {
            alt
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
            caption
          }
        }
      }
      categories {
        title
      }
      readTime
      bodyContent: _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;
