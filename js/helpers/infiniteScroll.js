import { allPostsHandler } from "../handlers/posts/allPostsHandler.js";
import { throttle } from "./throttleFunction.js";

const postsLoader = document.querySelector("#postsLoader");

let currentPage = 1;

export function handleInfiniteScroll(accessToken, apiKey) {
  throttle(() => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (endOfPage) {
      postsLoader.classList.remove("hidden");
      currentPage++;
      allPostsHandler(accessToken, apiKey, currentPage);
    }
  }, 1000);
}
