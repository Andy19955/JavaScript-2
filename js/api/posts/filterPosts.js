import { postsUrl } from "../../constants/apiUrls.js";
import { apiKey, maxPosts } from "../../constants/constants.js";
import { getToken } from "../../helpers/storage.js";

export async function filterPosts(formData, postsPage) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": apiKey,
    },
  };
  const response = await fetch(`${postsUrl}?_tag=${formData.filterQuery}&_author=true&limit=${maxPosts}&page=${postsPage}`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching posts.");
  }
  return json;
}
