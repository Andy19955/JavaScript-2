import { registerUrl } from "../../constants/apiUrls.js";

/**
 * Registers a new user with the provided registration data.
 *
 * @param {Object} registerData - The registration data containing the user's details.
 * @param {string} registerData.name - The name of the user.
 * @param {string} registerData.email - The email of the user.
 * @param {string} registerData.password - The password of the user.
 * @returns {Promise<Object>} - A promise that resolves to the registration response data.
 * @throws {Error} - Throws an error if the registration fails.
 *
 * @example
 * const registerData = { name: "John Doe", email: "john@example.com", password: "password123" };
 * registerUser(registerData)
 *   .then(response => console.log(response))
 *   .catch(error => console.error(error));
 */
export async function registerUser(registerData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  };

  const response = await fetch(registerUrl, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed.");
  }
  return json;
}
