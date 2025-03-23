import { registerUser } from "../../api/auth/registerUser.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

/**
 * Sets up the register form handler.
 *
 * @example
 * registerHandler();
 */
export function registerHandler() {
  const registerForm = document.querySelector("#registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", submitForm);
  }
}

/**
 * Handles the form submission for registering a user.
 *
 * @param {Event} event - The form submission event.
 *
 * @example
 * const form = document.querySelector("#registerForm");
 * form.addEventListener("submit", submitForm);
 */
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
    await registerUser(data);
    displayMessage("#messageContainer", "success", "Successfully registered.");
    form.reset();
  } catch (error) {
    displayMessage("#messageContainer", "error", error.message);
  } finally {
    fieldset.disabled = false;
    submitButton.textContent = "Sign up";
  }
}
