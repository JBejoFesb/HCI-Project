import axios from "axios";

// product fields to fetch
const CONTENT_FIELDS = `
json
links {
  entries {
    block {
      sys {
        id
      }
      __typename
      ... on VideoEmbed {
        title
        embedId
      }
    }
  },
  assets {
    block {
      sys {
        id
      }
      url
      title
      width
      height
      description
    }
  }
}
`;

const NEWS_POST_GRAPHQL_FIELDS = `
slug  
title
type {
  type
}
author 
mainImage {
  url
}
description 
creation
content {
  ${CONTENT_FIELDS}
}
`;

const REVIEW_POST_GRAPHQL_FIELDS = `
slug  
title 
type {
  type
}
headline
author 
mainImage {
  url
}
description 
creation
content {
  ${CONTENT_FIELDS}
}
`;

const SPECIAL_POST_GRAPHQL_FIELDS = NEWS_POST_GRAPHQL_FIELDS;

const VIDEO_POST_GRAPHQL_FIELDS = `
slug  
title 
type {
  type
}
author
description
creation
mainImage {
  url
}
url
`;

const PARTIAL_POST_FIELDS = `
slug
title
author
mainImage {
  url
}
creation
description
type {
  type
}
`;

const SIDEBAR_POST_FIELDS = `
slug
type {
  type
}
mainImage {
  url
}
title
`;

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

// extraction of singular post
function extractNewsPost(fetchResponse) {
  return fetchResponse?.data?.newsPostCollection?.items?.[0]
}

function extractReviewPost(fetchResponse) {
  return fetchResponse?.data?.reviewPostCollection?.items?.[0]
}

function extractSpecialPost(fetchResponse) {
  return fetchResponse?.data?.specialPostCollection?.items?.[0]
}

function extractVideoPost(fetchResponse) {
  return fetchResponse?.data?.videoPostCollection?.items?.[0]
}

// extraction of all returned posts
function extractNewsPostEntries(fetchResponse) {
  return fetchResponse?.data?.newsPostCollection?.items.sort((a, b) => Date.parse(new Date(b.creation)) - Date.parse(new Date(a.creation)));
}

function extractReviewPostEntries(fetchResponse) {
  return fetchResponse?.data?.reviewPostCollection?.items.sort((a, b) => Date.parse(new Date(b.creation)) - Date.parse(new Date(a.creation)));
}

function extractSpecialPostEntries(fetchResponse) {
  return fetchResponse?.data?.specialPostCollection?.items.sort((a, b) => Date.parse(new Date(b.creation)) - Date.parse(new Date(a.creation)));
}

function extractVideoPostEntries(fetchResponse) {
  return fetchResponse?.data?.videoPostCollection?.items.sort((a, b) => Date.parse(new Date(b.creation)) - Date.parse(new Date(a.creation)));
}

// extraction of all posts for homepage
function extractAllPostEntries(fetchResponse, hasVideo) {
  const temp = fetchResponse?.data;
  let allPosts = [];

  if (hasVideo) {
    allPosts = [...temp?.newsPostCollection?.items, ...temp?.reviewPostCollection?.items, ...temp?.videoPostCollection?.items, ...temp?.specialPostCollection?.items];
  }
  else {
    allPosts = [...temp?.newsPostCollection?.items, ...temp?.reviewPostCollection?.items, ...temp?.specialPostCollection?.items];
  }
    
  allPosts.sort((a, b) => Date.parse(new Date(b.creation)) - Date.parse(new Date(a.creation)));

  const splicedPosts = allPosts.splice(0,9);

  return splicedPosts;
}

// get all news
export async function getAllNewsPosts() {
  const entries = await fetchGraphQL(
    `query {
      newsPostCollection (limit: 9) {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractNewsPostEntries(entries);
}

// get all reviews
export async function getAllReviewPosts() {
  const entries = await fetchGraphQL(
    `query {
      reviewPostCollection (limit: 9) {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractReviewPostEntries(entries);
}

// get all specials
export async function getAllSpecialPosts() {
  const entries = await fetchGraphQL(
    `query {
      specialPostCollection (limit: 9) {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractSpecialPostEntries(entries);
}

// get all videos
export async function getAllVideoPosts() {
  const entries = await fetchGraphQL(
    `query {
      videoPostCollection (limit: 9) {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractVideoPostEntries(entries);
}

// get one news based on slug
export async function getNewsPostBySlug(slug) {
  
  const entries = await fetchGraphQL(
    `query {
      newsPostCollection (where: {slug:"${slug}"}, limit: 1) {
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

// get one review based on slug
export async function getReviewPostBySlug(slug) {
  const entries = await fetchGraphQL(
    `query {
      reviewPostCollection (where: {slug: "${slug}"}, limit: 1) {
        items {
          ${REVIEW_POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractReviewPost(entries);
}

// get one special based on slug
export async function getSpecialPostBySlug(slug) {
  const entries = await fetchGraphQL(
    `query {
      specialPostCollection (where: {slug: "${slug}"}, limit: 1) {
        items {
          ${SPECIAL_POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractSpecialPost(entries);
}

// get one video based on slug
export async function getVideoPostBySlug(slug) {
  const entries = await fetchGraphQL(
    `query {
      videoPostCollection (where: {slug: "${slug}"}, limit: 1) {
        items {
          ${VIDEO_POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractVideoPost(entries);
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

  if (!entries) {
    return {};
  }

  return extractNewsPostEntries(entries);
}

// get all review slugs
export async function getAllReviewSlugs() {
  const entries = await fetchGraphQL(
    `query {
      reviewPostCollection {
        items {
          slug
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractReviewPostEntries(entries);
}

// get all special slugs
export async function getAllSpecialSlugs() {
  const entries = await fetchGraphQL(
    `query {
      specialPostCollection {
        items {
          slug
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractSpecialPostEntries(entries);
}

// get all special slugs
export async function getAllVideoSlugs() {
  const entries = await fetchGraphQL(
    `query {
      videoPostCollection {
        items {
          slug
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractVideoPostEntries(entries);
}

// get all posts, regardless of type
export async function getAllPosts() {
  const entries = await fetchGraphQL(
    `query {
      newsPostCollection {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      },
      reviewPostCollection {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      },
      specialPostCollection {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      },
      videoPostCollection {
        items {
          ${PARTIAL_POST_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractAllPostEntries(entries, true);
}

export async function getPopularPosts() {
  const entries = await fetchGraphQL(
    `query {
      newsPostCollection (limit: 3) {
        items {
          ${SIDEBAR_POST_FIELDS}
        }
      },
      reviewPostCollection (limit: 3) {
        items {
          ${SIDEBAR_POST_FIELDS}
        }
      },
      specialPostCollection (limit: 3) {
        items {
          ${SIDEBAR_POST_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractAllPostEntries(entries, false).splice(0,3);
}

export async function getNewVideoPosts() {
  const entries = await fetchGraphQL(
    `query {
      videoPostCollection {
        items {
          ${SIDEBAR_POST_FIELDS}
        }
      }
    }`
  );

  if (!entries) {
    return {};
  }

  return extractVideoPostEntries(entries).splice(0,3);
}