import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProfile } from "../../api/profiles/fetchProfile.js";
import { displayProfile } from "../../ui/profiles/displayProfile.js";
import { getQueryParam } from "../../helpers/getQueryParam.js";
import { getName } from "../../helpers/storage.js";
import { profilePostsHandler } from "./profilePostsHandler.js";
import { displayFollowers } from "../../ui/profiles/displayFollowers.js";
import { displayFollowing } from "../../ui/profiles/displayFollowing.js";

export async function profileHandler() {
  const profileLoader = document.querySelector("#profileLoader");
  let name = getName();
  const queryName = getQueryParam("name");
  if (queryName) name = queryName;
  try {
    const profile = await fetchProfile(name);
    displayProfile(profile.data);
    profilePostsHandler(name, 1);
    displayFollowers(profile.data.followers);
    displayFollowing(profile.data.following);
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    profileLoader.classList.add("hidden");
  }
}
