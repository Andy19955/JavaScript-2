import { postsUrl } from "../../constants/apiUrls.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

/**
 * Edits a post by its ID.
 *
 * @param {string} postId - The ID of the post to edit.
 * @param {Object} post - The post object containing the updated data.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body content of the post.
 * @param {string} post.imageUrl - The URL of the post image.
 * @param {string} post.imageAlt - The alt text for the post image.
 * @returns {Promise<Object>} - A promise that resolves to the updated post data.
 * @throws {Error} - Throws an error if the post edit fails.
 *
 * @example
 * const post = {
 *   title: "Updated Post Title",
 *   body: "This is the updated body content of the post.",
 *   imageUrl: "https://example.com/image.jpg",
 *   imageAlt: "An example image"
 * };
 * editPost("123", post)
 *   .then(updatedPost => console.log(updatedPost))
 *   .catch(error => console.error(error));
 */
export async function editPost(postId, post) {
  if (post.imageUrl) {
    const media = {
      url: post.imageUrl,
      alt: post.imageAlt,
    };

    delete post.imageUrl;
    delete post.imageAlt;
    post.media = media;
  }

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
    body: JSON.stringify(post),
  };

  const response = await fetch(`${postsUrl}/${postId}`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed creating post.");
  }
  return json;
}
