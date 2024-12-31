import { postsUrl } from "../../constants/apiUrls.js";
import { apiKey } from "../../constants/constants.js";
import { getToken } from "../../helpers/storage.js";

export async function fetchSinglePost(postId) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  const response = await fetch(`${postsUrl}/${postId}?_author=true`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching the post.");
  }
  return json;
}
