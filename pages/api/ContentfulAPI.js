import axios from "axios";

// product fields to fetch
const NEWS_POST_GRAPHQL_FIELDS = `
slug  
title 
author 
mainImage {
  url
}
description 
creation
content {
  json
}
`;

const PARTIAL_POST_FIELDS = `
slug
title
author
mainImage {
  url
}
creation
description`;

async function fetchGraphQL(query) {
  const res = await axios
  .post(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      query: query
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENT_PREVIEW_TOKEN}`,
      },
    }
  )
    
  return res.data;
}

function extractNewsPost(fetchResponse) {
  return fetchResponse?.data?.newsPostCollection?.items?.[0]
}

function extractNewsPostEntries(fetchResponse) {
  return fetchResponse?.data?.newsPostCollection?.items
}

// get all news
export async function getAllNewsPosts() {
  const entries = await fetchGraphQL(
    `query {
      newsPostCollection {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    console.log("problem");
    return {};
  }

  return extractNewsPostEntries(entries);
}

// get one news based on slug
export async function getNewsPostBySlug(slug) {
  const entries = await fetchGraphQL(
    `query {
      newsPostCollection (where: {slug: "${slug}"}) {
        items {
          ${NEWS_POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractNewsPost(entries);
}

// get all news slugs
export async function getAllNewsSlugs() {
  const entries = await fetchGraphQL(
    `query {
      newsPostCollection {
        items {
          slug
        }
      }
    }`
  );
    console.log(entries.data.newsPostCollection);
  if (!entries) {
    return {};
  }

  return extractNewsPostEntries(entries);
}

// get all posts, regardless of type
export async function getAllPosts() {
  const entries = await fetchGraphQL(
    `query {
      newsPostCollection {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      }
    }`
  );
    console.log(entries.data.newsPostCollection);
  if (!entries) {
    return {};
  }

  return extractNewsPostEntries(entries);
}