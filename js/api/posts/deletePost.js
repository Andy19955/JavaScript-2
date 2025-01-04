import { postsUrl } from "../../constants/apiUrls.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

export async function deletePost(postId) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
  };

  const response = await fetch(`${postsUrl}/${postId}`, options);
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed deleting the post.");
  }
  return response;
}
