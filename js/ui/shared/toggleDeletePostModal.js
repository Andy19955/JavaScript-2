import { deletePostHandler } from "../../handlers/posts/deletePostHandler.js";

export function toggleDeletePostModal() {
  const modalContainer = document.querySelector("#modalContainer");
  const modalOverlay = document.querySelector("#modalOverlay");
  const closeModalButton = document.querySelector("#closeModalButton");

  if (modalOverlay.classList.contains("hidden")) {
    modalOverlay.classList.remove("hidden");
  }

  if (modalContainer.classList.contains("hidden")) {
    modalContainer.classList.remove("hidden");
  }

  const confirmDeleteButton = document.querySelector("#confirmDeleteButton");
  confirmDeleteButton.addEventListener("click", deletePostHandler);

  closeModalButton.addEventListener("click", () => {
    modalOverlay.classList.add("hidden");
    modalContainer.classList.add("hidden");
    confirmDeleteButton.removeEventListener("click", deletePostHandler);
  });

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.classList.add("hidden");
      modalContainer.classList.add("hidden");
      confirmDeleteButton.removeEventListener("click", deletePostHandler);
    }
  });
}
