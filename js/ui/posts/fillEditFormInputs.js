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
