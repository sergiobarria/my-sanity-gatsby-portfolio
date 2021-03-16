// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

// const clientConfig = require("./client-config");

const sanityConfig = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  useCdn: true, // false if you want to ensure fresh data
};

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  siteMetadata: {
    title: `Sergio M Barria Portfolio`,
    description: `Personal site for Sergio M Barria, Web & mobile developer portfolio and blog. Sharing content on web and mobile development with JavaScript, React, Gatsby, Next js and much more`,
    keywords: [
      "Sergio M Barria",
      "Sergio Barria",
      "JavaScript",
      "React",
      "Web Development",
      "Mobile Development",
      "JAMStack",
      "Next js",
      "Gatsby js",
    ],
    author: `Sergio Barria`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
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
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        // fragmentTypeName: "SanityMainImage",
        customImageTypes: ["mainImage"],
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
