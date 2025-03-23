/**
 * Creates a DOM element representing a profile that is following the user.
 *
 * @param {Object} follower - The follower profile object.
 * @param {string} follower.name - The name of the follower profile.
 * @param {Object} follower.avatar - The avatar object containing the URL and alt text.
 * @param {string} follower.avatar.url - The URL of the avatar image.
 * @param {string} [follower.avatar.alt] - The alt text for the avatar image.
 *
 * @returns {HTMLAnchorElement} - The DOM element representing the follower profile.
 *
 * @example
 * const follower = {
 *   name: "Alice Johnson",
 *   avatar: {
 *     url: "https://example.com/avatar1.jpg",
 *     alt: "Alice Johnson's Avatar"
 *   }
 * };
 * const followerElement = createFollower(follower);
 * document.body.append(followerElement);
 */
export function createFollower(follower) {
  const followerLink = document.createElement("a");
  followerLink.href = `/profile/?name=${follower.name}`;

  const followerItem = document.createElement("div");
  followerItem.classList.add("flex", "items-center", "gap-5", "rounded-md", "p-2", "hover:bg-gray-200", "hover:cursor-pointer");

  const followerAvatar = document.createElement("img");
  followerAvatar.classList.add("w-10", "h-10", "rounded-full");
  followerAvatar.src = follower.avatar.url;
  followerAvatar.alt = follower.avatar.alt ?? `${follower.name}'s avatar`;

  const followerName = document.createElement("span");
  followerName.innerText = follower.name;

  followerItem.append(followerAvatar, followerName);
  followerLink.append(followerItem);
  return followerLink;
}
