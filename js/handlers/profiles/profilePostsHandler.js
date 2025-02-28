import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProfilePosts } from "../../api/posts/fetchProfilePosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { setupProfileInfiniteScroll } from "../../helpers/profileInfiniteScroll.js";

/**
 * Handles fetching and displaying profile posts, and sets up infinite scroll.
 *
 * @param {string} name - The name of the profile to fetch posts for.
 * @param {number} page - The page number to fetch posts from.
 *
 * @example
 * profilePostsHandler("JohnDoe", 1);
 */
export async function profilePostsHandler(name, page) {
  const postsContainer = document.querySelector("#postsContainer");
  let postsCount;
  let isLastPage;
  try {
    const posts = await fetchProfilePosts(name, page);
    postsCount = posts.data.length;
    postsLoader.classList.add("hidden");
    isLastPage = posts.meta.isLastPage;
    displayPosts(posts.data, postsContainer);
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    if (postsCount > 0) {
      window.addEventListener("scroll", () => {
        setupProfileInfiniteScroll(name, isLastPage);
      });
    } else {
      postsContainer.innerText = "Found no posts";
    }
    postsLoader;
  }
}
