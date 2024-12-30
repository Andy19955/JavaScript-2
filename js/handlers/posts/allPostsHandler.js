import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { handleInfiniteScroll } from "../../helpers/infiniteScroll.js";

export async function allPostsHandler(accessToken, apiKey, page) {
  const postsContainer = document.querySelector("#postsContainer");
  const postsLoader = document.querySelector("#postsLoader");
  try {
    const posts = await fetchPosts(accessToken, apiKey, page);
    postsLoader.classList.add("hidden");
    displayPosts(posts, postsContainer);
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    window.addEventListener("scroll", function () {
      handleInfiniteScroll(accessToken, apiKey);
    });
  }
}
