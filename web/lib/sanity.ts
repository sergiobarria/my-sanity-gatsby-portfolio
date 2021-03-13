import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "fy247d5u",
  dataset: "production",
  useCdn: true, // false if you want to ensure fresh data
})

// process.env.NEXT_PUBLIC_SANITY_ID
