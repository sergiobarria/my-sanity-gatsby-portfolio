// If you don't want to use TypeScript you can delete this file!
import * as React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import SEO from "../components/seo";

type DataProps = {
  site: {
    buildTime: string;
  };
};

const HomePage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  // console.log(data);

  return (
    <Layout>
      <header className="container">
        <Header />
      </header>
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
            marks
            text
          }
        }
        publishedAt(formatString: "MMMM DD, YYYY")
        tags
        mainImage {
          alt
          caption
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
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
