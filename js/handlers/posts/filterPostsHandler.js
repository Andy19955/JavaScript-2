import { infiniteScroll } from "../../helpers/infiniteScroll.js";
import { resetFilter } from "../../helpers/resetFilter.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";

/**
 * Handles filtering posts by a specific tag and sets up the reset filter button.
 *
 * @param {Array<Object>} allPosts - An array of all post objects.
 * @param {string} tag - The tag to filter posts by.
 *
 * @example
 * filterPostsHandler(allPosts, "JavaScript");
 */
export function filterPostsHandler(allPosts, tag) {
  let filteredPosts;
  const postsContainer = document.querySelector("#postsContainer");
  const resetFilterButton = document.querySelector("#resetFilterButton");

  window.removeEventListener("scroll", infiniteScroll);
  postsContainer.replaceChildren();

  if (!tag) {
    displayPosts(allPosts, postsContainer);
    return;
  }

  filteredPosts = allPosts.filter((post) => post.tags.includes(tag));

  displayPosts(filteredPosts, postsContainer);

  resetFilterButton.addEventListener("click", resetFilter);
}
