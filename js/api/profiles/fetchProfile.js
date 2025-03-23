import { profileUrl } from "../../constants/apiUrls.js";
import { getApiKey, getToken } from "../../helpers/storage.js";

/**
 * Fetches the profile data for a given profile name.
 *
 * @param {string} name - The name of the profile to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the profile data.
 * @throws {Error} - Throws an error if the profile fetch fails.
 *
 * @example
 * fetchProfile("JohnDoe")
 *   .then(profile => console.log(profile))
 *   .catch(error => console.error(error));
 */
export async function fetchProfile(name) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      "X-Noroff-API-Key": getApiKey(),
    },
  };

  const response = await fetch(`${profileUrl}/${name}?_followers=true&_following=true`, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Failed fetching profile.");
  }
  return json;
}
