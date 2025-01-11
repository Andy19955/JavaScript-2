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
