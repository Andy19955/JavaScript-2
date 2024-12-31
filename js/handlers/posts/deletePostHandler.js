import { displayMessage } from "../../ui/shared/displayMessage.js";
import { getQueryParam } from "../../helpers/getQueryParam.js";
import { deletePost } from "../../api/posts/deletePost.js";

export async function deletePostHandler() {
  const deleteButton = document.querySelector("#deleteButton");
  const postId = getQueryParam("id");
  try {
    deleteButton.innerHTML = "<i class='fa fa-spinner fa-spin'></i>";
    await deletePost(postId);
    window.location.href = "/feed/";
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
    deleteButton.textContent = "Delete";
  }
}
