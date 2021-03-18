import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Services from '../components/layout/Services';
import PostsPreview from '../components/posts/PostPreview';
import SEO from '../components/analytics/SEO';

const HomePage = ({ data }) => {
  const posts = data.allSanityPost.nodes.map(post => ({
    ...post,
  }));

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <header className="container">
          <Header />
        </header>
        <Services />
        <PostsPreview posts={posts} showTitle showBtn />
      </Layout>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query {
    allSanityPost(sort: { order: DESC, fields: publishedAt }, limit: 3) {
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
