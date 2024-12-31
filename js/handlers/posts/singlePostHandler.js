import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchSinglePost } from "../../api/posts/fetchSinglePost.js";
import { getQueryParam } from "../../helpers/getQueryParam.js";
import { displaySinglePost } from "../../ui/posts/displaySinglePost.js";

export async function singlePostHandler() {
  const postLoader = document.querySelector("#postLoader");
  const postId = getQueryParam("id");
  try {
    const post = await fetchSinglePost(postId);
    displaySinglePost(post.data);
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    postLoader.classList.add("hidden");
  }
}
