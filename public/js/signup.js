const signupFormHandler = async (event) => {
  event.preventDefault();

  const success = document.getElementById("success");
  const danger = document.getElementById("danger");
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const confirmpassword = document
    .querySelector("#confirmpassword-signup")
    .value.trim();

  if (username && email && password && confirmpassword) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password, confirmpassword }),
      headers: { "Content-Type": "application/json" },
    });

    if (password != confirmpassword) {
      danger.style.display = "block";
    } else {
      danger.style.display = "none";
      success.style.display = "block";
      window.location.href = "/dashboard";
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
