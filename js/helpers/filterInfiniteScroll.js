import { filterPosts } from "../api/posts/filterPosts.js";
import { displayPosts } from "../ui/posts/displayPosts.js";
import { throttle } from "./throttleFunction.js";

let currentFilterPage = 1;
let lastFilterData = null;
let isLoading = false;
let hasMorePosts = true;

export function setupFilterInfiniteScroll(initialFilterData) {
  currentFilterPage = 1;
  lastFilterData = initialFilterData;
  hasMorePosts = true;

  window.addEventListener("scroll", filterInfiniteScroll);
}

export function filterInfiniteScroll() {
  throttle(async () => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (endOfPage && !isLoading && hasMorePosts) {
      const postsLoader = document.querySelector("#postsLoader");
      postsLoader.classList.remove("hidden");
      isLoading = true;

      try {
        currentFilterPage++;
        const posts = await filterPosts(lastFilterData, currentFilterPage);

        if (posts.data.length === 0) {
          hasMorePosts = false;
        } else {
          const postsContainer = document.querySelector("#postsContainer");
          displayPosts(posts, postsContainer);
        }
      } catch (error) {
        console.error("Error loading more filter results:", error);
      } finally {
        isLoading = false;
        postsLoader.classList.add("hidden");
      }
    }
  }, 1000);
}
