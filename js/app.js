import { toggleMenu } from "./ui/shared/toggleMenu.js";
import { toggleFollowersFollowing } from "./ui/toggleFollowersFollowing.js";
import { registerHandler } from "./handlers/auth/registerHandler.js";
import { signInHandler } from "./handlers/auth/signInHandler.js";
import { allPostsHandler } from "./handlers/posts/allPostsHandler.js";
import { profileHandler } from "./handlers/profiles/profileHandler.js";
import { singlePostHandler } from "./handlers/posts/singlePostHandler.js";
import { createPostHandler } from "./handlers/posts/createPostHandler.js";
import { editPostHandler } from "./handlers/posts/editPostHandler.js";
import { searchPostsHandler } from "./handlers/posts/searchPostsHandler.js";
import { filterPostsHandler } from "./handlers/posts/filterPostsHandler.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
      signInHandler();
      break;
    case "/register/":
      registerHandler();
      break;
    case "/profile/":
      toggleMenu();
      toggleFollowersFollowing();
      profileHandler();
      break;
    case "/feed/":
      toggleMenu();
      allPostsHandler(1);
      createPostHandler();
      searchPostsHandler(1, false);
      filterPostsHandler(1, false);
      break;
    case "/post/":
      toggleMenu();
      singlePostHandler();
      break;
    case "/post/edit/":
      toggleMenu();
      editPostHandler();
      break;
  }
}

router();
