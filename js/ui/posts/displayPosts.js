import { createPost } from "./createPost.js";

/**
 * Displays a list of posts in the specified container.
 *
 * @param {Array<Object>} posts - An array of post objects to display.
 * @param {HTMLElement} postsContainer - The container element where the posts will be displayed.
 *
 * @example
 * const posts = [
 *   {
 *     title: "Post 1",
 *     body: "This is the body of post 1.",
 *     author: {
 *       name: "Author 1"
 *     },
 *     created: "2025-02-28T12:34:56Z"
 *   },
 *   {
 *     title: "Post 2",
 *     body: "This is the body of post 2.",
 *     author: {
 *       name: "Author 2"
 *     },
 *     created: "2025-02-28T12:34:56Z"
 *   }
 * ];
 * const postsContainer = document.querySelector("#postsContainer");
 * displayPosts(posts, postsContainer);
 */
export function displayPosts(posts, postsContainer) {
  posts.forEach(function (post) {
    const postItem = createPost(post);
    postsContainer.append(postItem);
  });
}
