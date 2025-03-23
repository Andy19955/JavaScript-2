/**
 * Fills the edit form inputs with the provided post data.
 *
 * @param {Object} post - The post object containing the data to fill the form.
 * @param {string} post.title - The title of the post.
 * @param {Object} [post.media] - The media object containing the URL and alt text of the post image.
 * @param {string} [post.media.url] - The URL of the post image.
 * @param {string} [post.media.alt] - The alt text for the post image.
 * @param {string} post.body - The body content of the post.
 *
 * @example
 * const post = {
 *   title: "My Post Title",
 *   media: {
 *     url: "https://example.com/image.jpg",
 *     alt: "An example image"
 *   },
 *   body: "This is the body content of the post."
 * };
 * fillEditFormInputs(post);
 */
export function fillEditFormInputs(post) {
  const postTitle = document.querySelector("#title");
  postTitle.value = post.title;
  document.title = `${post.title} - Beam`;

  const postImageUrl = document.querySelector("#imageUrl");
  postImageUrl.value = post.media?.url || "";

  const postImageAlt = document.querySelector("#imageAlt");
  postImageAlt.value = post.media?.alt || "";

  const postBody = document.querySelector("#body");
  postBody.value = post.body;
}
