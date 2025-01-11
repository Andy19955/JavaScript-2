import { createFollowing } from "./createFollowing.js";

export function displayFollowing(following) {
  const followingContainer = document.querySelector("#followingContainer");
  if (following.length > 0) {
    following.forEach((follow) => {
      const followingItem = createFollowing(follow);
      followingContainer.append(followingItem);
    });
  } else {
    followingContainer.append("No following");
  }
}
