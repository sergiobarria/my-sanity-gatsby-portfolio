import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import Title from '../components/ui/Title';
import PostsPreview from '../components/posts/PostPreview';
import SEO from '../components/analytics/SEO';
import Pagination from '../components/ui/Pagination';

export default function Blog({ data, pageContext }) {
  const posts = data.allSanityPost.nodes.map(post => ({
    ...post,
  }));

  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <section>
          <Title title="All Blog Posts" />
          <Pagination
            totalCount={data.allSanityPost.totalCount}
            currentPage={pageContext.currentPage}
          />
          <PostsPreview posts={posts} />
        </section>
      </Layout>
    </>
  );
}

export const query = graphql`
  query Blog($skip: Int! = 0) {
    allSanityPost(
      sort: { order: DESC, fields: publishedAt }
      limit: 10
      skip: $skip
    ) {
      totalCount
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
