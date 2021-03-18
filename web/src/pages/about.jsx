import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Title from '../components/ui/Title';
import SEO from '../components/analytics/SEO';

const BlockContent = require('@sanity/block-content-to-react');

const About = ({ data }) => {
  // eslint-disable-next-line
  const mainContent = data.allSanityAbout.nodes[0]._rawBody;

  return (
    <>
      <SEO title="About" />
      <Layout>
        <Title title="About me" color="white" />
        <article className="mx-auto my-20 prose">
          <BlockContent blocks={mainContent} />
        </article>
      </Layout>
    </>
  );
};

export default About;

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
