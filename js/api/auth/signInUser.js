import { signInUrl } from "../../constants/apiUrls.js";

/**
 * Signs in a user with the provided sign-in data.
 *
 * @param {Object} signInData - The sign-in data containing the user's credentials.
 * @param {string} signInData.email - The email of the user.
 * @param {string} signInData.password - The password of the user.
 * @returns {Promise<Object>} - A promise that resolves to the sign-in response data.
 * @throws {Error} - Throws an error if the sign-in fails.
 *
 * @example
 * const signInData = { email: "user@example.com", password: "password123" };
 * signInUser(signInData)
 *   .then(response => console.log(response))
 *   .catch(error => console.error(error));
 */
export async function signInUser(signInData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signInData),
  };

  const response = await fetch(signInUrl, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Sign in failed.");
  }
  return json;
}
