import { displayMessage } from "../../ui/shared/displayMessage.js";
import { createPost } from "../../api/posts/createPost.js";

export async function createPostHandler() {
  const createPostForm = document.querySelector("#createPostForm");
  if (createPostForm) {
    createPostForm.addEventListener("submit", submitForm);
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
    const response = await createPost(data);
    window.location.href = `/post/?id=${response.data.id}`;
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    fieldset.disabled = false;
    submitButton.textContent = "Publish";
  }
}
