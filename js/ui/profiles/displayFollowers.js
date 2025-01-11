import { createFollower } from "./createFollower.js";

export function displayFollowers(followers) {
  const followersContainer = document.querySelector("#followersContainer");
  if (followers.length > 0) {
    followers.forEach((follower) => {
      const followerItem = createFollower(follower);
      followersContainer.append(followerItem);
    });
  } else {
    followersContainer.append("No followers");
  }
}
