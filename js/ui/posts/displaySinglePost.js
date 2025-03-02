import { getQueryParam } from "../../helpers/getQueryParam.js";
import { getName } from "../../helpers/storage.js";
import { fallbackImage, fallBackImageAlt } from "../../constants/constants.js";

/**
 * Displays a single post on the post page.
 *
 * @param {Object} post - The post object containing the data to display.
 * @param {Object} [post.media] - The media object containing the URL and alt text of the post image.
 * @param {string} [post.media.url] - The URL of the post image.
 * @param {string} [post.media.alt] - The alt text for the post image.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body content of the post.
 * @param {Object} post.author - The author object containing the name of the post author.
 * @param {string} post.author.name - The name of the post author.
 * @param {string} post.created - The creation date of the post.
 *
 * @example
 * const post = {
 *   media: {
 *     url: "https://example.com/image.jpg",
 *     alt: "An example image"
 *   },
 *   title: "My Post Title",
 *   body: "This is the body content of the post.",
 *   author: {
 *     name: "John Doe"
 *   },
 *   created: "2025-02-28T12:34:56Z"
 * };
 * displaySinglePost(post);
 */
export function displaySinglePost(post) {
  const postImage = document.querySelector("#postImage");
  postImage.setAttribute("src", post.media?.url || fallbackImage);
  postImage.setAttribute("alt", post.media?.alt || (post.media?.url ? `${post.title} post's featured image` : fallBackImageAlt));
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
