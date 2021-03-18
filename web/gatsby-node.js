/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query GetSlugs {
      slugs: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  response.data.slugs.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.slug.current}`,
      component: path.resolve('./src/templates/BlogPostTemplate.jsx'),
      context: { slug: node.slug.current },
    });
  });
};
