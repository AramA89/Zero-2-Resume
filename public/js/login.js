//***************************************************** USER LOGIN MENU ***************************************************//
const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector(".username-input").value.trim();
  const password = document.querySelector(".password-input").value.trim();
//USERNAME LOGIN//
if (username && password) {
  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({username, password}),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
      document.location.replace("/");

          } else {
              alert("Error❗⛔ Invalid login credentials❗⛔" +
                  response.status +
                      ": " +
                  response.statusText);
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
  .querySelector(".login-button")
  .addEventListener("click", loginFormHandler);