import { profileUrl } from "../../constants/apiUrls.js";
import { maxPosts } from "../../constants/constants.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

export async function fetchProfilePosts(name, postsPage) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
  };

  const response = await fetch(`${profileUrl}/${name}/posts?_author=true&limit=${maxPosts}&page=${postsPage}`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching posts.");
  }
  return json;
}
