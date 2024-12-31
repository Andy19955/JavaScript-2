import { profileUrl } from "../../constants/apiUrls.js";
import { apiKey } from "../../constants/constants.js";
import { getToken } from "../../helpers/storage.js";

export async function fetchProfile(name) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": apiKey,
    },
  };

  const response = await fetch(`${profileUrl}/${name}?_followers=true&_following=true`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching profile.");
  }
  return json;
}
