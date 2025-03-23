import { postsUrl } from "../../constants/apiUrls.js";
import { maxPosts } from "../../constants/constants.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

/**
 * Filters posts based on the provided form data and page number.
 *
 * @param {Object} formData - The form data containing the filter query.
 * @param {string} formData.filterQuery - The filter query to use for filtering posts.
 * @param {number} postsPage - The page number to fetch posts from.
 * @returns {Promise<Object>} - A promise that resolves to the filtered posts.
 * @throws {Error} - Throws an error if the filter fetch fails.
 *
 * @example
 * const formData = { filterQuery: "JavaScript" };
 * filterPosts(formData, 1)
 *   .then(posts => console.log(posts))
 *   .catch(error => console.error(error));
 */
export async function filterPosts(formData, postsPage) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
  };
  const response = await fetch(`${postsUrl}?_tag=${formData.filterQuery}&_author=true&limit=${maxPosts}&page=${postsPage}`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching posts.");
  }
  return json;
}
