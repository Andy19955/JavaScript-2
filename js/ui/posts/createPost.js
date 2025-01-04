export function createPost(post) {
  const postCardLink = document.createElement("a");
  postCardLink.setAttribute("href", `/post/?id=${post.id}`);

  const postCard = document.createElement("div");
  postCard.classList.add("overflow-hidden", "relative", "group", "hover:cursor-pointer", "rounded-lg", "h-64");

  const postProfileImage = document.createElement("img");
  postProfileImage.classList.add("absolute", "top-1", "left-1", "z-20", "w-10", "h-10", "rounded-full");
  postProfileImage.src = post.author.avatar.url;

  const postImage = document.createElement("img");
  postImage.classList.add("rounded-lg", "shadow-md", "object-cover", "group-hover:scale-125", "transition-all", "duration-300", "w-full", "h-52", "group-hover:h-full");
  if (post.media && post.media.url) {
    postImage.alt = post.media?.alt || `${post.title} post's featured image`;
    postImage.src = post.media.url;
  } else {
    postImage.alt = "A light beam with the name and slogan of Beam.";
    postImage.src = "/images/logo.png";
  }

  const titleOverlayDiv = document.createElement("div");
  titleOverlayDiv.classList.add("bg-black", "bg-opacity-30", "w-full", "h-full", "z-20", "absolute", "top-0", "left-0", "justify-center", "items-center", "hidden", "group-hover:flex");
  const titleOverlayText = document.createElement("h2");
  titleOverlayText.classList.add("text-white", "font-semibold");
  titleOverlayText.innerText = post.title;
  titleOverlayDiv.append(titleOverlayText);

  const postTitle = document.createElement("h2");
  postTitle.classList.add("text-black", "font-semibold");
  postTitle.innerText = post.title;

  postCard.append(postProfileImage);
  postCard.append(postImage);
  postCard.append(titleOverlayDiv);
  postCard.append(postTitle);
  postCardLink.append(postCard);
  return postCardLink;
}
