import { allPostsHandler } from "../handlers/posts/allPostsHandler.js";
import { throttle } from "./throttleFunction.js";

const postsLoader = document.querySelector("#postsLoader");

let currentPage = 1;

export function infiniteScroll() {
  throttle(() => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (endOfPage) {
      postsLoader.classList.remove("hidden");
      currentPage++;
      allPostsHandler(currentPage);
    }
  }, 1000);
}
