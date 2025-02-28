import { fallbackImage, fallBackImageAlt } from "../../constants/constants.js";

/**
 * Creates a DOM element representing a post.
 *
 * @param {Object} post - The post object containing the data to display.
 * @param {string} post.id - The ID of the post.
 * @param {string} post.title - The title of the post.
 * @param {Object} post.author - The author object containing the name and avatar of the post author.
 * @param {Object} post.author.avatar - The avatar object containing the URL of the author's avatar.
 * @param {string} post.author.avatar.url - The URL of the author's avatar image.
 * @param {Object} [post.media] - The media object containing the URL and alt text of the post image.
 * @param {string} [post.media.url] - The URL of the post image.
 * @param {string} [post.media.alt] - The alt text for the post image.
 *
 * @returns {HTMLAnchorElement} - The DOM element representing the post.
 *
 * @example
 * const post = {
 *   id: "1",
 *   title: "My Post Title",
 *   author: {
 *     avatar: {
 *       url: "https://example.com/avatar.jpg"
 *     }
 *   },
 *   media: {
 *     url: "https://example.com/image.jpg",
 *     alt: "An example image"
 *   }
 * };
 * const postElement = createPost(post);
 * document.body.append(postElement);
 */
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
    postImage.onerror = () => {
      postImage.src = fallbackImage;
      postImage.alt = fallBackImageAlt;
      postImage.onerror = null;
    };
  } else {
    postImage.alt = fallBackImageAlt;
    postImage.src = fallbackImage;
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
