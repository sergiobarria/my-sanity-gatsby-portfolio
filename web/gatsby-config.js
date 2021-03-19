// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

// const clientConfig = require("./client-config");

// const sanityConfig = {
//   projectId: process.env.GATSBY_SANITY_PROJECT_ID,
//   dataset: process.env.GATSBY_SANITY_DATASET,
//   useCdn: true, // false if you want to ensure fresh data
// };

// const isProd = process.env.NODE_ENV === 'production';
// const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  siteMetadata: {
    title: `Sergio M. Barria Portfolio`,
    description: `Personal site for Sergio M. Barria, Web & mobile developer portfolio and blog. Sharing content on web and mobile development with JavaScript, React, Gatsby, Next js, Flutter, React Native`,
    keywords: [
      'Sergio M Barria',
      'Sergio Barria',
      'JavaScript',
      'React',
      'Web Development',
      'Mobile Development',
      'JAMStack',
      'Next js',
      'Gatsby js',
      'Flutter',
      'React Native',
    ],
    siteUrl: 'https://www.sergiobarria.com',
    author: `Sergio Barria`,
    twitterUsername: '@thecodingscript',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
        // Any eslint-webpack-plugin options below
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        useCdn: true, // false if you want to ensure fresh data
        // token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        // overlayDrafts: !isProd,
      },
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // fragmentTypeName: "SanityMainImage",
        customImageTypes: ['mainImage'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-G8H7JVKKBY', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          // anonymize_ip: true,
          // cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
