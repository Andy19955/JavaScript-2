import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";

export async function allPostsHandler(accessToken, apiKey) {
  const postsContainer = document.querySelector("#postsContainer");
  try {
    const posts = await fetchPosts(accessToken, apiKey);
    postsContainer.replaceChildren();
    displayPosts(posts, postsContainer);
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  }
}
