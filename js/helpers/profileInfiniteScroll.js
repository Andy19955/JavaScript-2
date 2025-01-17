import { fetchProfilePosts } from "../api/posts/fetchProfilePosts.js";
import { displayPosts } from "../ui/posts/displayPosts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";
import { throttle } from "./throttleFunction.js";

let currentPostsPage = 1;
let lastName = null;
let isLoading = false;
let hasMorePosts = true;

export function setupProfileInfiniteScroll(initialName, isLastPage) {
  currentPostsPage = 1;
  lastName = initialName;
  hasMorePosts = true;

  if (isLastPage === false) {
    window.addEventListener("scroll", profileInfiniteScroll);
  }
}

export function profileInfiniteScroll() {
  throttle(async () => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (endOfPage && !isLoading && hasMorePosts) {
      const postsLoader = document.querySelector("#postsLoader");
      postsLoader.classList.remove("hidden");
      isLoading = true;

      try {
        currentPostsPage++;
        const posts = await fetchProfilePosts(lastName, currentPostsPage);

        if (posts.data.length === 0) {
          hasMorePosts = false;
        } else {
          const postsContainer = document.querySelector("#postsContainer");
          displayPosts(posts, postsContainer);
        }
      } catch (error) {
        displayMessage("#messageContainer", "error", error.message);
      } finally {
        isLoading = false;
        postsLoader.classList.add("hidden");
      }
    }
  }, 1000);
}
