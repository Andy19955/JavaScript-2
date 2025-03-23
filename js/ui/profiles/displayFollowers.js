import { createFollower } from "./createFollower.js";

/**
 * Displays the list of profiles that are following the user.
 *
 * @param {Array<Object>} followers - An array of follower profiles.
 * @param {string} followers[].name - The name of the follower profile.
 * @param {Object} followers[].avatar - The avatar object containing the URL and alt text.
 * @param {string} followers[].avatar.url - The URL of the avatar image.
 * @param {string} followers[].avatar.alt - The alt text for the avatar image.
 *
 * @example
 * const followers = [
 *   {
 *     name: "Alice Johnson",
 *     avatar: {
 *       url: "https://example.com/avatar1.jpg",
 *       alt: "Alice Johnson's Avatar"
 *     }
 *   },
 *   {
 *     name: "Bob Brown",
 *     avatar: {
 *       url: "https://example.com/avatar2.jpg",
 *       alt: "Bob Brown's Avatar"
 *     }
 *   }
 * ];
 * displayFollowers(followers);
 */
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
