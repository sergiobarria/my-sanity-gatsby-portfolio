export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604c2d86294def55ee36b0b1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-t5powhxx',
                  apiId: '6cb5a964-28d4-42fe-a3c1-013b4e7f2bb2',
                },
                {
                  buildHookId: '604c2d86e813186b154bbcd2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ifsvbdk1',
                  apiId: '7f7bd14f-d5db-481b-93fe-bb92960e8df3',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sergiobarria/sanity-gatsby-blog',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-ifsvbdk1.netlify.app',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent blog posts',
        order: '_createdAt desc',
        types: ['post'],
      },
      layout: { width: 'medium' },
    },
  ],
};
