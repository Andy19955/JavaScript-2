import { displayMessage } from "../../ui/shared/displayMessage.js";
import { getQueryParam } from "../../helpers/getQueryParam.js";
import { deletePost } from "../../api/posts/deletePost.js";

export async function deletePostHandler() {
  const deleteButton = document.querySelector("#deleteButton");
  const confirmDeleteButton = document.querySelector("#confirmDeleteButton");
  const postId = getQueryParam("id");
  try {
    deleteButton.innerHTML = "<i class='fa fa-spinner fa-spin'></i>";
    deleteButton.disabled = true;
    confirmDeleteButton.innerHTML = "<i class='fa fa-spinner fa-spin'></i>";
    confirmDeleteButton.disabled = true;
    await deletePost(postId);
    window.location.href = "/feed/";
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
    deleteButton.textContent = "Delete";
    deleteButton.disabled = false;
    confirmDeleteButton.textContent = "Delete permanently";
    confirmDeleteButton.disabled = false;
  }
}
