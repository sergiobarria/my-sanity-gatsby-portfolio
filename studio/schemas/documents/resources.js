export default {
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "image",
      title: "Card Image",
      type: "image",
    },
    {
      name: "description",
      type: "excerptPortableText",
      title: "Description",
    },
    {
      name: "link",
      type: "url",
      description: "Add the url for the resource",
    },
    {
      name: "category",
      type: "string",
      title: "Categories",
      options: {
        list: [
          { value: "common tools", title: "Common tools" },
          { value: "javascript", title: "JavaScript" },
          { value: "free assets", title: "Free Assets" },
        ],
      },
    },
  ],
}
