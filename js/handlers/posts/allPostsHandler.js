import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { infiniteScroll } from "../../helpers/infiniteScroll.js";

export async function allPostsHandler(page) {
  const postsContainer = document.querySelector("#postsContainer");
  const postsLoader = document.querySelector("#postsLoader");
  try {
    const posts = await fetchPosts(page);
    postsLoader.classList.add("hidden");
    displayPosts(posts, postsContainer);
    console.log(posts);
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    window.addEventListener("scroll", infiniteScroll);
  }
}
