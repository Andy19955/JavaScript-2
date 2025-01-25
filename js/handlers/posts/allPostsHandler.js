import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { infiniteScroll } from "../../helpers/infiniteScroll.js";
import { filterPostsHandler } from "./filterPostsHandler.js";

const allPosts = [];

export async function allPostsHandler(page) {
  const postsContainer = document.querySelector("#postsContainer");
  const postsLoader = document.querySelector("#postsLoader");
  const tagSelector = document.querySelector("#filter");

  try {
    const posts = await fetchPosts(page);
    postsLoader.classList.add("hidden");

    allPosts.push(...posts.data);
    displayPosts(posts.data, postsContainer);

    const uniquePostTags = new Set();
    posts.data.forEach((post) => {
      post.tags.forEach((tag) => {
        if (!Array.from(tagSelector.options).some((option) => option.value === tag)) {
          uniquePostTags.add(tag);
        }
      });
    });

    const uniqueTagsArray = Array.from(uniquePostTags);
    uniqueTagsArray.forEach((tag) => {
      const optionElement = document.createElement("option");
      optionElement.value = tag;
      optionElement.innerText = tag;
      tagSelector.append(optionElement);
    });

    tagSelector.addEventListener("change", function () {
      const selectedTag = tagSelector.value;
      filterPostsHandler(allPosts, selectedTag);
    });
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    window.addEventListener("scroll", infiniteScroll);
  }
}
