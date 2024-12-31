import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProfile } from "../../api/profiles/fetchProfile.js";
import { displayPosts } from "../../ui/posts/displayPosts.js";
import { infiniteScroll } from "../../helpers/infiniteScroll.js";
import { displayProfile } from "../../ui/profiles/displayProfile.js";
import { getQueryParam } from "../../helpers/getQueryParam.js";
import { getName } from "../../helpers/storage.js";

export async function profileHandler() {
  // const postsContainer = document.querySelector("#postsContainer");
  const profileLoader = document.querySelector("#profileLoader");
  let name = getName();
  const queryName = getQueryParam("name");
  if (queryName) name = queryName;
  try {
    const profile = await fetchProfile(name);
    profileLoader.classList.add("hidden");
    displayProfile(profile.data);
    // displayPosts(posts, postsContainer);
  } catch (error) {
    profileLoader.classList.add("hidden");
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    // window.addEventListener("scroll", function () {
    //   handleInfiniteScroll(accessToken, apiKey);
    // });
  }
}
