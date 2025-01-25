import { createPost } from "./createPost.js";

export function displayPosts(posts, postsContainer) {
  posts.forEach(function (post) {
    const postItem = createPost(post);
    postsContainer.append(postItem);
  });
}
