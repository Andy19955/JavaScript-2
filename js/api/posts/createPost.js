import { postsUrl } from "../../constants/apiUrls.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

/**
 * Creates a new post.
 *
 * @param {Object} post - The post object containing the data to create.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body content of the post.
 * @param {string} post.imageUrl - The URL of the post image.
 * @param {string} post.imageAlt - The alt text for the post image.
 * @returns {Promise<Object>} - A promise that resolves to the created post data.
 * @throws {Error} - Throws an error if the post creation fails.
 *
 * @example
 * const post = {
 *   title: "New Post Title",
 *   body: "This is the body content of the new post.",
 *   imageUrl: "https://example.com/image.jpg",
 *   imageAlt: "An example image"
 * };
 * createPost(post)
 *   .then(createdPost => console.log(createdPost))
 *   .catch(error => console.error(error));
 */
export async function createPost(post) {
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
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
    body: JSON.stringify(post),
  };

  const response = await fetch(postsUrl, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed creating post.");
  }
  return json;
}
