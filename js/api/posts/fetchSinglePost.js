import { postsUrl } from "../../constants/apiUrls.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

/**
 * Fetches a single post by its ID.
 *
 * @param {string} postId - The ID of the post to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the post data.
 * @throws {Error} - Throws an error if the post fetch fails.
 *
 * @example
 * fetchSinglePost("123")
 *   .then(post => console.log(post))
 *   .catch(error => console.error(error));
 */
export async function fetchSinglePost(postId) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
  };

  const response = await fetch(`${postsUrl}/${postId}?_author=true`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching the post.");
  }
  return json;
}
