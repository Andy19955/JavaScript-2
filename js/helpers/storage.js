const tokenKey = "token";
const nameKey = "name";

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
