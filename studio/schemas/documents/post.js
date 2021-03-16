import { format } from "date-fns"

export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, when people share your post in social media.",
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        {
          type: "authorReference",
        },
      ],
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
    },
    {
      name: "keywords",
      type: "array",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "tags",
      type: "array",
      description: "Add tags that describes your blog content.",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "readTime",
      description: "Add the estimated read time.",
      title: "Read Time",
      type: "number",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     title: "title",
  //     author: "author.name",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { authors } = selection
  //     return Object.assign({}, selection, {
  //       subtitle: authors && `by ${authors}`,
  //     })
  //   },
  // },
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
      author: "author",
    },
    prepare({ title = "No title", publishedAt, slug = {}, media, author }) {
      const dateSegment = format(publishedAt, "YYYY/MMM/DD")
      const path = `/${dateSegment}/${slug.current}/`
      const authorName = `Sergio Barria`
      return {
        title,
        media,
        subtitle: `${dateSegment}, by ${authorName}`,
        // publishedAt ? path : "Missing publishing date"
      }
    },
  },
}
