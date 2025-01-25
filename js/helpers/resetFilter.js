import { allPostsHandler } from "../handlers/posts/allPostsHandler.js";

export function resetFilter() {
  const postsContainer = document.querySelector("#postsContainer");
  const filterSelect = document.querySelector("#filter");
  filterSelect.selectedIndex = 0;

  postsContainer.replaceChildren();
  allPostsHandler(1);
}
