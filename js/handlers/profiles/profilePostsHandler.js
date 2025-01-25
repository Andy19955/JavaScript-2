import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProfilePosts } from "../../api/posts/fetchProfilePosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { setupProfileInfiniteScroll } from "../../helpers/profileInfiniteScroll.js";

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
