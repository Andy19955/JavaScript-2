const tokenKey = "token";
const nameKey = "name";
const apiKey = "key";

export function saveToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export function saveName(name) {
  localStorage.setItem(nameKey, name);
}

export function getName() {
  return localStorage.getItem(nameKey);
}

export function saveApiKey(key) {
  localStorage.setItem(apiKey, key);
}

export function getApiKey() {
  return localStorage.getItem(apiKey);
}
