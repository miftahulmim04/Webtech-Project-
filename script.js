const loginForm = document.querySelector(".login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let valid = true;

  
    if (username.value.trim() === "") {
      showError(username, "usernameError", "Username is required.");
      valid = false;
    } else if (username.value.trim().length < 3) {
      showError(username, "usernameError", "Username must be at least 3 characters.");
      valid = false;
    } else {
      showSuccess(username);
    }


    if (password.value === "") {
      showError(password, "passwordError", "Password is required.");
      valid = false;
    } else if (password.value.length < 8) {
      showError(password, "passwordError", "Password must be at least 8 characters.");
      valid = false;
    } else {
      showSuccess(password);
    }

    if (valid) {
      alert("Login Success!");
      window.location.href = "dashboard.html";
    }
  });
}
