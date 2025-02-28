import { postsUrl } from "../../constants/apiUrls.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

/**
 * Deletes a post by its ID.
 *
 * @param {string} postId - The ID of the post to delete.
 * @returns {Promise<Response>} - A promise that resolves to the response of the delete request.
 * @throws {Error} - Throws an error if the post delete fails.
 *
 * @example
 * deletePost("123")
 *   .then(response => console.log("Post deleted"))
 *   .catch(error => console.error(error));
 */
export async function deletePost(postId) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
  };

  const response = await fetch(`${postsUrl}/${postId}`, options);
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed deleting the post.");
  }
  return response;
}
