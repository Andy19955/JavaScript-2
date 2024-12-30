import { postsUrl } from "../../constants/apiUrls.js";

export async function fetchPosts(accessToken, apiKey, postsPage) {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  const response = await fetch(`${postsUrl}?_author=true&limit=40&page=${postsPage}`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching posts.");
  }
  return json;
}
