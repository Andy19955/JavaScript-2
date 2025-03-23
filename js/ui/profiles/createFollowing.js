/**
 * Creates a DOM element representing a profile that the user is following.
 *
 * @param {Object} following - The following profile object.
 * @param {string} following.name - The name of the following profile.
 * @param {Object} following.avatar - The avatar object containing the URL and alt text.
 * @param {string} following.avatar.url - The URL of the avatar image.
 * @param {string} [following.avatar.alt] - The alt text for the avatar image.
 *
 * @returns {HTMLAnchorElement} - The DOM element representing the following profile.
 *
 * @example
 * const following = {
 *   name: "Jane Doe",
 *   avatar: {
 *     url: "https://example.com/avatar1.jpg",
 *     alt: "Jane Doe's Avatar"
 *   }
 * };
 * const followingElement = createFollowing(following);
 * document.body.append(followingElement);
 */
export function createFollowing(following) {
  const followingLink = document.createElement("a");
  followingLink.href = `/profile/?name=${following.name}`;

  const followingItem = document.createElement("div");
  followingItem.classList.add("flex", "items-center", "gap-5", "rounded-md", "p-2", "hover:bg-gray-200", "hover:cursor-pointer");

  const followingAvatar = document.createElement("img");
  followingAvatar.classList.add("w-10", "h-10", "rounded-full");
  followingAvatar.src = following.avatar.url;
  followingAvatar.alt = following.avatar.alt ?? `${following.name}'s avatar`;

  const followingName = document.createElement("span");
  followingName.innerText = following.name;

  followingItem.append(followingAvatar, followingName);
  followingLink.append(followingItem);
  return followingLink;
}
