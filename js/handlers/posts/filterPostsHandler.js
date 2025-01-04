import { infiniteScroll } from "../../helpers/infiniteScroll.js";
import { filterPosts } from "../../api/posts/filterPosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { setupFilterInfiniteScroll } from "../../helpers/filterInfiniteScroll.js";
import { maxPosts } from "../../constants/constants.js";

export async function filterPostsHandler(page) {
  const filterPostsForm = document.querySelector("#filterPostsForm");
  if (filterPostsForm) {
    filterPostsForm.addEventListener("submit", (event) => {
      submitForm(event, page);
    });
  }
}

async function submitForm(event, page) {
  event.preventDefault();
  window.removeEventListener("scroll", infiniteScroll);

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const fieldset = form.querySelector("fieldset");
  const submitButton = form.querySelector("#submitFilterButton");

  const postsContainer = document.querySelector("#postsContainer");
  const postsLoader = document.querySelector("#postsLoader");
  postsContainer.replaceChildren();
  postsLoader.classList.remove("hidden");
  const messageContainer = document.querySelector("#messageContainer");
  if (!messageContainer.classList.contains("hidden")) messageContainer.classList.add("hidden");

  let postsCount;
  try {
    fieldset.disabled = true;
    submitButton.innerHTML = "<i class='fa fa-spinner fa-spin'></i>";
    const posts = await filterPosts(data, page);
    postsCount = posts.data.length;
    postsLoader.classList.add("hidden");
    displayPosts(posts, postsContainer);

    if (postsCount === maxPosts) {
      setupFilterInfiniteScroll(data);
    }
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    fieldset.disabled = false;
    submitButton.textContent = "filter";
    if (postsCount === 0) {
      displayMessage("#messageContainer", "error", `Found no posts with the tag '${data.filterQuery}'.`);
    }
  }
}
