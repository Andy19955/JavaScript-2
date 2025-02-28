import { postsUrl } from "../../constants/apiUrls.js";
import { maxPosts } from "../../constants/constants.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

/**
 * Fetches posts with pagination.
 *
 * @param {number} postsPage - The page number to fetch posts from.
 * @returns {Promise<Object>} - A promise that resolves to the posts data.
 * @throws {Error} - Throws an error if the posts fetch fails.
 *
 * @example
 * fetchPosts(1)
 *   .then(posts => console.log(posts))
 *   .catch(error => console.error(error));
 */
export async function fetchPosts(postsPage) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
  };

  const response = await fetch(`${postsUrl}?_author=true&limit=${maxPosts}&page=${postsPage}`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching posts.");
  }
  return json;
}
