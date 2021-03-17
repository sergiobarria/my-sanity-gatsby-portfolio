// module.exports = {
//   sanity: {
//     projectId: process.env.GATSBY_SANITY_PROJECT_ID,
//     dataset: process.env.GATSBY_SANITY_DATASET,
//     useCdn: true,
//   },
// };

import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  useCdn: true, // false if you want to ensure fresh data
});

// process.env.NEXT_PUBLIC_SANITY_ID
