import { allPostsHandler } from "../handlers/posts/allPostsHandler.js";
import { throttle } from "./throttleFunction.js";

// export function infiniteScroll() {
const postsLoader = document.querySelector("#postsLoader");

let currentPage = 1;

export const handleInfiniteScroll = (accessToken, apiKey) => {
  throttle(() => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;

    if (endOfPage) {
      postsLoader.classList.remove("hidden");
      currentPage++;
      allPostsHandler(accessToken, apiKey, currentPage);
    }
  }, 1000);
};
// }
