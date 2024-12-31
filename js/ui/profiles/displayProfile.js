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
