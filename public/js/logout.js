//***************************************************** USER LOGOUT MENU ***************************************************//
const logout = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
});

if (!response.ok) {
    alert("Error❗⛔ Failed to logout❗⛔");
}
};

logout();
