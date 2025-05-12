// main-login.js
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".sign-in-btn");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const username = document.getElementById("username-login").value.trim();
    const password = document.getElementById("pass-login").value;

    const usernameSpan = document.getElementById("login-username-span");
    const passwordSpan = document.getElementById("login-pass-span");

    usernameSpan.textContent = "Your unique username for logging in.";
    usernameSpan.style.color = "";
    passwordSpan.textContent = "Use at least 8 characters, including a number.";
    passwordSpan.style.color = "";

    let isValid = true;

    if (!username) {
      usernameSpan.textContent = 'Username is required';
      usernameSpan.style.color = 'red';
      isValid = false;
    }

    if (!password) {
      passwordSpan.textContent = 'Password is required';
      passwordSpan.style.color = 'red';
      isValid = false;
    } else if (password.length < 6) {
      passwordSpan.textContent = 'Password must be at least 6 characters';
      passwordSpan.style.color = 'red';
      isValid = false;
    }

    const storedFullName = localStorage.getItem("fullName");
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      alert(`Welcome ${storedFullName}`);
      window.location.href = "../Products/main-page.html";
    } else {
      alert("username or password is not correct");
    }
  });
});