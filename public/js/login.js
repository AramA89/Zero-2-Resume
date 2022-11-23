async function loginFormHandler(event) {
  event.preventDefault();

  const success = document.getElementById("success");
  const danger = document.getElementById("danger");
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      danger.style.display = "none";
      success.style.display = "block";
      document.location.replace("/dashboard");
    } else {
      danger.style.display = "block";
    }
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
