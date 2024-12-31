import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchSinglePost } from "../../api/posts/fetchSinglePost.js";
import { getQueryParam } from "../../helpers/getQueryParam.js";
import { fillEditFormInputs } from "../../ui/posts/fillEditFormInputs.js";
import { editPost } from "../../api/posts/editPost.js";
import { deletePostHandler } from "./deletePostHandler.js";

const postId = getQueryParam("id");

export async function editPostHandler() {
  const postLoader = document.querySelector("#postLoader");
  const editPostForm = document.querySelector("#editPostForm");
  try {
    const post = await fetchSinglePost(postId);
    fillEditFormInputs(post.data);
    editPostForm.classList.remove("hidden");
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    postLoader.classList.add("hidden");
    if (editPostForm) {
      editPostForm.addEventListener("submit", submitForm);
      const deleteButton = document.querySelector("#deleteButton");
      deleteButton.addEventListener("click", deletePostHandler);
    }
  }
}

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const fieldset = form.querySelector("fieldset");
  const submitButton = form.querySelector("#submitButton");

  try {
    fieldset.disabled = true;
    submitButton.innerHTML = "<i class='fa fa-spinner fa-spin'></i>";
    const response = await editPost(postId, data);
    window.location.href = `/post/?id=${response.data.id}`;
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    fieldset.disabled = false;
    submitButton.textContent = "Update";
  }
}
