import { registerUrl } from "../../constants/apiUrls.js";

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
