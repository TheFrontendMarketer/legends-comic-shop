import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "feoix8xb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Helper functions for common queries
export async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title
    }
  }`;

  return await client.fetch(query);
}

export async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      title
    }
  }`;

  return await client.fetch(query, { slug });
}

export async function getAuthors() {
  const query = `*[_type == "author"] {
    _id,
    name,
    image,
    bio
  }`;

  return await client.fetch(query);
}

export async function getCategories() {
  const query = `*[_type == "category"] {
    _id,
    title,
    description
  }`;

  return await client.fetch(query);
}
