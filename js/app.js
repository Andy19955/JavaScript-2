import { toggleMenu } from "./ui/shared/toggleMenu.js";
import { toggleFollowersFollowing } from "./ui/toggleFollowersFollowing.js";

function router() {
  const { pathname } = location;

  switch (pathname) {
    case "/":
    case "/index.html":
      console.log("sign in");
      break;
    case "/register/":
      console.log("register");
      break;
    case "/profile/":
      toggleMenu();
      toggleFollowersFollowing();
      break;
    case "/feed/":
      toggleMenu();
      break;
  }
}

router();
