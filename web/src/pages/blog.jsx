import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Title from '../components/ui/Title';
import PostsPreview from '../components/posts/PostPreview';

export default function Blog({ data }) {
  const posts = data.allSanityPost.nodes.map(post => ({
    ...post,
  }));

  return (
    <Layout>
      <section>
        <Title title="All Blog Posts" />
        <PostsPreview posts={posts} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSanityPost(sort: { order: DESC, fields: publishedAt }) {
      nodes {
        _id
        title
        slug {
          current
        }
        excerpt {
          children {
            text
          }
        }
        publishedAt(formatString: "MMMM DD, YYYY")
        tags
        mainImage {
          alt
          caption
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        authors {
          author {
            name
          }
        }
        categories {
          title
        }
        readTime
      }
    }
  }
`;
