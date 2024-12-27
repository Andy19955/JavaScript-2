import { signInUrl } from "../../constants/apiUrls.js";

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
