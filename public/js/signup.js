//***************************************************** USER SIGNUP MENU ***************************************************//
const signupFormHandler = async (event) => {
  event.preventDefault();

const username = document.querySelector(".username-input").value.trim();
const email = document.querySelector(".email-input").value.trim();
const password = document.querySelector(".password-input").value.trim();
//ALERT USER --> PASSWORD REQUIREMENTS//
if (password.length < 6) {
  alert("⛔ The minimum password length is 6 characters❗ ⛔");
} else if (username && email && password) {
  const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
      document.location.replace("/");
  } else {
      alert(
          "Error❗⛔ Failed to signup❗⛔" +
              response.status +
              ": " +
              response.statusText
      );
  }
} else {
  alert("Error❗⛔ Please fill out all required fields❗⛔");
}
};

const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function() {
  const type = passwordField.getAttribute("type")
  === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});


//EVENT LISTENERS//
document
.querySelector(".signup-button")
.addEventListener("click", signupFormHandler);
