import { getQueryParam } from "../../helpers/getQueryParam.js";
import { getName } from "../../helpers/storage.js";
import { fallbackImage, fallBackImageAlt } from "../../constants/constants.js";

export function displaySinglePost(post) {
  const postImage = document.querySelector("#postImage");
  postImage.setAttribute("src", post.media?.url || fallbackImage);
  postImage.setAttribute("alt", post.media?.alt || fallBackImageAlt);
  postImage.onerror = () => {
    postImage.src = fallbackImage;
    postImage.alt = fallBackImageAlt;
    postImage.onerror = null;
  };

  const postTitle = document.querySelector("#postTitle");
  postTitle.innerText = post.title;
  document.title = `${post.title} - Beam`;

  const postContainer = document.querySelector("#postContainer");
  postContainer.innerText = post.body;

  const postAuthorLink = document.querySelector("#postAuthorLink");
  postAuthorLink.setAttribute("href", `/profile/?name=${post.author.name}`);
  postAuthorLink.innerText = post.author.name;

  if (post.author.name === getName()) {
    const editButton = document.createElement("a");
    editButton.setAttribute("href", `./edit/?id=${getQueryParam("id")}`);
    editButton.textContent = "Edit post";
    editButton.classList.add(
      "max-w-80",
      "text-white",
      "font-bold",
      "py-2.5",
      "px-5",
      "text-center",
      "rounded-md",
      "bg-gradient-to-r",
      "from-red-600",
      "to-orange-500",
      "transition",
      "duration-100",
      "hover:from-red-700",
      "hover:to-orange-600"
    );
    const postActions = document.querySelector("#postActions");
    postActions.append(editButton);
  }

  const postCreatedDate = document.querySelector("#postCreatedDate");
  const createdDate = new Date(post.created);
  postCreatedDate.innerText = `Created: ${createdDate.getDate()}.${createdDate.getMonth() + 1}.${createdDate.getFullYear()}`;
}
