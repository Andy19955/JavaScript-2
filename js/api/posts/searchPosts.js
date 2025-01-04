import { postsUrl } from "../../constants/apiUrls.js";
import { maxPosts } from "../../constants/constants.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

export async function searchPosts(formData, postsPage) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
  };
  const response = await fetch(`${postsUrl}/search?q=${formData.searchQuery}&_author=true&limit=${maxPosts}&page=${postsPage}`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching posts.");
  }
  return json;
}
