/**
 * Displays the profile information on the profile page.
 *
 * @param {Object} profile - The profile object containing user information.
 * @param {string} profile.name - The name of the profile.
 * @param {Object} profile.avatar - The avatar object containing the URL and alt text.
 * @param {string} profile.avatar.url - The URL of the avatar image.
 * @param {string} profile.avatar.alt - The alt text for the avatar image.
 * @param {string} [profile.bio] - The biography of the profile.
 * @param {Object} profile._count - The count object containing posts, followers, and following counts.
 * @param {number} profile._count.posts - The number of posts by the profile.
 * @param {number} profile._count.followers - The number of followers of the profile.
 * @param {number} profile._count.following - The number of profiles the user is following.
 *
 * @example
 * const profile = {
 *   name: "John Doe",
 *   avatar: {
 *     url: "https://example.com/avatar.jpg",
 *     alt: "John Doe's Avatar"
 *   },
 *   bio: "Web developer and tech enthusiast.",
 *   _count: {
 *     posts: 42,
 *     followers: 100,
 *     following: 50
 *   }
 * };
 * displayProfile(profile);
 */

export function displayProfile(profile) {
  const profileName = document.querySelector("#profileName");
  profileName.innerText = profile.name;

  const profileAvatar = document.querySelector("#profileAvatar");
  profileAvatar.src = profile.avatar.url;
  profileAvatar.setAttribute("alt", profile.avatar.alt);

  const profileBio = document.querySelector("#profileBio");
  profileBio.innerText = profile.bio || "";

  const profilePostsCounter = document.querySelector("#profilePostsCounter");
  profilePostsCounter.innerText = profile._count.posts;

  const profileFollowersCounter = document.querySelector("#profileFollowersCounter");
  profileFollowersCounter.innerText = profile._count.followers;

  const profileFollowingCounter = document.querySelector("#profileFollowingCounter");
  profileFollowingCounter.innerText = profile._count.following;

  const profileContainer = document.querySelector("#profileContainer");
  profileContainer.classList.add("flex");
  profileContainer.classList.remove("hidden");
}
