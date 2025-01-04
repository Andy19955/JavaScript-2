import { searchPosts } from "../api/posts/searchPosts.js";
import { displayPosts } from "../ui/posts/displayPosts.js";
import { displayMessage } from "../ui/shared/displayMessage.js";
import { throttle } from "./throttleFunction.js";

let currentSearchPage = 1;
let lastSearchData = null;
let isLoading = false;
let hasMorePosts = true;

export function setupSearchInfiniteScroll(initialSearchData) {
  currentSearchPage = 1;
  lastSearchData = initialSearchData;
  hasMorePosts = true;

  window.addEventListener("scroll", searchInfiniteScroll);
}

export function searchInfiniteScroll() {
  throttle(async () => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (endOfPage && !isLoading && hasMorePosts) {
      const postsLoader = document.querySelector("#postsLoader");
      postsLoader.classList.remove("hidden");
      isLoading = true;

      try {
        currentSearchPage++;
        const posts = await searchPosts(lastSearchData, currentSearchPage);

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
