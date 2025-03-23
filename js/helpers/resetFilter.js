import { allPostsHandler } from "../handlers/posts/allPostsHandler.js";

/**
 * Resets the post filter to its default state and reloads all posts.
 *
 * @example
 * resetFilter();
 */
export function resetFilter() {
  const postsContainer = document.querySelector("#postsContainer");
  const filterSelect = document.querySelector("#filter");
  filterSelect.selectedIndex = 0;

  postsContainer.replaceChildren();
  allPostsHandler(1);
}
