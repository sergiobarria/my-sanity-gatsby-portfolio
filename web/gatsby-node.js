const path = require('path');

async function makePostsFromSanity({ graphql, actions }) {
  const { data } = await graphql(`
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

  data.slugs.nodes.forEach(node => {
    actions.createPage({
      path: `/blog/${node.slug.current}`,
      component: path.resolve('./src/templates/BlogPostTemplate.jsx'),
      context: { slug: node.slug.current },
    });
  });
}

async function paginate({ graphql, actions, pathPrefix }) {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allSanityPost {
        totalCount
      }
    }
  `);

  const { totalCount } = data.allSanityPost;
  const postsPerPage = 10;
  const numPages = Math.ceil(totalCount / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `${pathPrefix}${i + 1}`,
      component: path.resolve('./src/templates/BlogListTemplate.jsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
}
// i === 0 ? `/blog` : `/blog/${i + 1}`

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    makePostsFromSanity({ graphql, actions }),
    paginate({ graphql, actions, pathPrefix: '/blog/' }),
  ]);
};
