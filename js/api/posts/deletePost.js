import { postsUrl } from "../../constants/apiUrls.js";
import { apiKey } from "../../constants/constants.js";
import { getToken } from "../../helpers/storage.js";

export async function deletePost(postId) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  const response = await fetch(`${postsUrl}/${postId}`, options);
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed deleting the post.");
  }
  return response;
}
