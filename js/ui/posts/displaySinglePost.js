import { getQueryParam } from "../../helpers/getQueryParam.js";
import { getName } from "../../helpers/storage.js";

export function displaySinglePost(post) {
  const postImage = document.querySelector("#postImage");
  postImage.setAttribute(
    "src",
    post.media?.url || "https://images.unsplash.com/photo-1618044619888-009e412ff12a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  postImage.setAttribute("alt", post.media?.alt || "Screen with programming language");

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
