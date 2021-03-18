import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Title from '../components/ui/Title';
import ProjectsPreview from '../components/projects/ProjectsPreview';
import SEO from '../components/analytics/SEO';

export default function Projects({ data }) {
  const projects = data.projects.nodes.map(project => ({
    ...project,
  }));

  return (
    <>
      <SEO title="Projects" />
      <Layout>
        <Title title="All Projects" />
        <ProjectsPreview projects={projects} />
      </Layout>
    </>
  );
}

export const query = graphql`
  {
    projects: allSanityProjects {
      nodes {
        title
        id
        description
        date(formatString: "MMMM DD, YYYY")
        tags
        projectType
        link
        mainImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
