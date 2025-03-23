import { infiniteScroll } from "../../helpers/infiniteScroll.js";
import { searchPosts } from "../../api/posts/searchPosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { setupSearchInfiniteScroll } from "../../helpers/searchInfiniteScroll.js";
import { maxPosts } from "../../constants/constants.js";

/**
 * Handles the search posts form submission and sets up infinite scroll.
 *
 * @param {number} page - The page number to fetch posts from.
 *
 * @example
 * searchPostsHandler(1);
 */
export async function searchPostsHandler(page) {
  const searchPostsForm = document.querySelector("#searchPostsForm");
  if (searchPostsForm) {
    searchPostsForm.addEventListener("submit", (event) => {
      submitForm(event, page);
    });
  }
}

/**
 * Handles the form submission for searching posts.
 *
 * @param {Event} event - The form submission event.
 * @param {number} page - The page number to fetch posts from.
 *
 * @example
 * const form = document.querySelector("#searchPostsForm");
 * form.addEventListener("submit", (event) => {
 *   submitForm(event, 1);
 * });
 */
async function submitForm(event, page) {
  event.preventDefault();
  window.removeEventListener("scroll", infiniteScroll);

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const fieldset = form.querySelector("fieldset");
  const submitButton = form.querySelector("#submitSearchButton");

  const postsContainer = document.querySelector("#postsContainer");
  const postsLoader = document.querySelector("#postsLoader");
  postsContainer.replaceChildren();
  postsLoader.classList.remove("hidden");
  const messageContainer = document.querySelector("#messageContainer");
  if (!messageContainer.classList.contains("hidden")) messageContainer.classList.add("hidden");

  let postsCount;
  try {
    fieldset.disabled = true;
    submitButton.innerHTML = "<i class='fa fa-spinner fa-spin'></i>";
    const posts = await searchPosts(data, page);
    postsCount = posts.data.length;
    postsLoader.classList.add("hidden");
    displayPosts(posts.data, postsContainer);

    if (postsCount === maxPosts) {
      setupSearchInfiniteScroll(data);
    }
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    fieldset.disabled = false;
    submitButton.textContent = "Search";
    if (postsCount === 0) {
      displayMessage("#messageContainer", "error", `Found no posts that matches '${data.searchQuery}'.`);
    }
  }
}
