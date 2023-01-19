import axios from "axios";

// product fields to fetch
const NEWS_GRAPHQL_FIELDS = `
  title
  slug
  author
  mainImage {
    url
  }
  otherImages {

  }
  description
`;

async function fetchGraphQL(query) {
  try {
    const res = await axios.post(
      `https://graphql.contentful.com/content/v1/spaces/g7gmdfw1bcha`,
      { query },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer MFKp7NKX3VBYIL8Hl_EHOG537xa8rvZlp9NyLQ8hkKk`,
        },
      }
    );
    console.log("test");

    return res.data;
  } catch (error) {
    console.error("Failed to fetch Contentful");
  }
}

function extractNews(fetchResponse) {
  return fetchResponse?.data?.newsCollection?.items?.[0];
}

function extractNewsEntries(fetchResponse) {
  return fetchResponse?.data?.newsCollection?.items;
}

// get all news
export async function getAllNewsPosts() {
  const entries = await fetchGraphQL(
    `query {
      newsCollection(where: { slug_exists: true }) {
        items {
          ${NEWS_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractNewsEntries(entries);
}