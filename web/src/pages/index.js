import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import PostsPreview from "../components/posts/PostPreview";
// import SEO from "../components/seo";

const HomePage = ({ data }) => {
  const posts = data.allSanityPost.nodes.map(post => ({
    ...post,
  }));

  return (
    <Layout>
      <header className="container">
        <Header />
      </header>
      <PostsPreview posts={posts} />
    </Layout>
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
            gatsbyImageData
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
