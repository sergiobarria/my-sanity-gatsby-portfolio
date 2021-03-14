export default {
  widgets: [
    // {
    //   name: "sanity-tutorials",
    // },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "gatsby",
            options: {
              sites: [
                {
                  siteUrl: "<siteUrl>",
                },
              ],
            },
            layout: { width: "small", height: "small" },
          },
        ],
        // __experimental_before: [
        //   {
        //     name: "netlify",
        //     options: {
        //       description:
        //         "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
        //       sites: [
        //         {
        //           title: "Sanity Studio",
        //           apiId: "6cb5a964-28d4-42fe-a3c1-013b4e7f2bb2", // The Netfliy API id of your site
        //           buildHookId: "", //The id of a build hook you have created for your site within the Netlify administration panel (see Settings > Continous Deployment).
        //           name: "", // The Netlify site name
        //         },
        //         {
        //           title: "My Gatsby Portfolio",
        //           apiId: "",
        //           buildHookId: "",
        //           name: "",
        //         },
        //       ],
        //     },
        //   },
        // ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/sergiobarria/my-sanity-gatsby-portfolio",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
}
