import { toggleMenu } from "./ui/shared/toggleMenu.js";
import { toggleFollowersFollowing } from "./ui/toggleFollowersFollowing.js";
import { registerHandler } from "./handlers/auth/registerHandler.js";
import { signInHandler } from "./handlers/auth/signInHandler.js";
import { allPostsHandler } from "./handlers/posts/allPostsHandler.js";
import { accessToken, apiKey } from "./constants/constants.js";

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
      break;
    case "/feed/":
      toggleMenu();
      allPostsHandler(accessToken, apiKey, 1);
      break;
  }
}

router();
