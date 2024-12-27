import { signInUser } from "../../api/auth/signInUser.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

export function signInHandler() {
  const signInForm = document.querySelector("#signInForm");
  if (signInForm) {
    signInForm.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const fieldset = form.querySelector("fieldset");
  const submitButton = form.querySelector("#submitButton");

  try {
    fieldset.disabled = true;
    submitButton.innerHTML = "<i class='fa fa-spinner fa-spin'></i>";
    const response = await signInUser(data);
    localStorage.setItem("accessToken", response.data.accessToken);
    window.location.href = "/profile/";
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    fieldset.disabled = false;
    submitButton.textContent = "Sign up";
  }
}
