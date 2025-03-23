import { postsUrl } from "../../constants/apiUrls.js";
import { maxPosts } from "../../constants/constants.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

/**
 * Searches for posts based on the provided form data and page number.
 *
 * @param {Object} formData - The form data containing the search query.
 * @param {string} formData.searchQuery - The search query to use for searching posts.
 * @param {number} postsPage - The page number to fetch posts from.
 * @returns {Promise<Object>} - A promise that resolves to the search results.
 * @throws {Error} - Throws an error if the search fetch fails.
 *
 * @example
 * const formData = { searchQuery: "JavaScript" };
 * searchPosts(formData, 1)
 *   .then(posts => console.log(posts))
 *   .catch(error => console.error(error));
 */
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
