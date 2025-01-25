import { infiniteScroll } from "../../helpers/infiniteScroll.js";
import { resetFilter } from "../../helpers/resetFilter.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";

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
