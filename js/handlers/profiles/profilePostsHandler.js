import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProfilePosts } from "../../api/posts/fetchProfilePosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { setupProfileInfiniteScroll } from "../../helpers/profileInfiniteScroll.js";

export async function profilePostsHandler(name, page) {
  const postsContainer = document.querySelector("#postsContainer");
  try {
    const posts = await fetchProfilePosts(name, page);
    displayPosts(posts, postsContainer);
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    window.addEventListener("scroll", () => {
      setupProfileInfiniteScroll(name);
    });
  }
}
