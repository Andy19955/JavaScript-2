import { getToken } from "../../helpers/storage.js";
import { apiKeyUrl } from "../../constants/apiUrls.js";

export async function createApiKey() {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  };

  const response = await fetch(apiKeyUrl, options);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "An error occured.");
  }
  return json;
}
