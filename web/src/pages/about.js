import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/Layout";
import Title from "../components/ui/Title";

const BlockContent = require("@sanity/block-content-to-react");

const About = ({ data }) => {
  // const {} = data

  // console.log(data.allSanityAbout.nodes[0]._rawBody);
  const mainContent = data.allSanityAbout.nodes[0]._rawBody;

  return (
    <Layout>
      <Title title="About me" color="white" />
      <article className="mx-auto my-20 prose">
        <BlockContent blocks={mainContent} />
      </article>
    </Layout>
  );
};

export default About;
// body {
//   children {
//     text
//   }
// }

export const query = graphql`
  {
    allSanityAbout {
      nodes {
        title
        _rawBody
      }
    }
  }
`;
