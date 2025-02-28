import { createFollowing } from "./createFollowing.js";

/**
 * Displays the list of profiles the user is following.
 *
 * @param {Array<Object>} following - An array of following profiles.
 * @param {string} following[].name - The name of the following profile.
 * @param {Object} following[].avatar - The avatar object containing the URL and alt text.
 * @param {string} following[].avatar.url - The URL of the avatar image.
 * @param {string} following[].avatar.alt - The alt text for the avatar image.
 *
 * @example
 * const following = [
 *   {
 *     name: "Jane Doe",
 *     avatar: {
 *       url: "https://example.com/avatar1.jpg",
 *       alt: "Jane Doe's Avatar"
 *     }
 *   },
 *   {
 *     name: "John Smith",
 *     avatar: {
 *       url: "https://example.com/avatar2.jpg",
 *       alt: "John Smith's Avatar"
 *     }
 *   }
 * ];
 * displayFollowing(following);
 */
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
