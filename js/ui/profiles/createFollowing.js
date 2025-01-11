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
