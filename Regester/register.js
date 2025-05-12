
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".signin-form");
  const signInBtn = document.querySelector(".sign-in-btn");

  signInBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Get input values
    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const confirmPass = document.getElementById("conPass").value;

    // Get span elements for error messages
    const fullNameSpan = document.getElementById("fullName-span");
    const usernameSpan = document.getElementById("username-span");
    const emailSpan = document.getElementById("email-span");
    const passSpan = document.getElementById("pass-span");
    const conPassSpan = document.getElementById("conPass-span");

    // Reset error messages
    fullNameSpan.textContent =
      "Please enter your first and last name as it appears on official documents.";
    usernameSpan.textContent = "Your unique username for logging in.";
    emailSpan.textContent = "We'll never share your email with anyone else.";
    passSpan.textContent = "Use at least 8 characters, including a number.";
    conPassSpan.textContent = "Make sure both passwords match.";

    fullNameSpan.style.color = "";
    usernameSpan.style.color = "";
    emailSpan.style.color = "";
    passSpan.style.color = "";
    conPassSpan.style.color = "";

    let isValid = true;

    // Full Name Validation
    if (!fullName) {
      fullNameSpan.textContent = "Full name is required";
      fullNameSpan.style.color = "red";
      isValid = false;
    } else if (!/^[a-zA-Z ]{2,30}$/.test(fullName)) {
      fullNameSpan.textContent =
        "Please enter a valid name (letters and spaces only)";
      fullNameSpan.style.color = "red";
      isValid = false;
    }

    // Username Validation
    if (!username) {
      usernameSpan.textContent = "Username is required";
      usernameSpan.style.color = "red";
      isValid = false;
    } else if (username.length < 3) {
      usernameSpan.textContent = "Username must be at least 3 characters";
      usernameSpan.style.color = "red";
      isValid = false;
    } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      usernameSpan.textContent =
        "Username can only contain letters, numbers, and underscores";
      usernameSpan.style.color = "red";
      isValid = false;
    } 

    // Email Validation
    if (!email) {
      emailSpan.textContent = "Email is required";
      emailSpan.style.color = "red";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailSpan.textContent = "Please enter a valid email address";
      emailSpan.style.color = "red";
      isValid = false;
    }

    // Password Validation
    if (!password) {
      passSpan.textContent = "Password is required";
      passSpan.style.color = "red";
      isValid = false;
    } else if (password.length < 8) {
      passSpan.textContent = "Password must be at least 8 characters";
      passSpan.style.color = "red";
      isValid = false;
    } else if (!/\d/.test(password)) {
      passSpan.textContent = "Password must contain at least one number";
      passSpan.style.color = "red";
      isValid = false;
    }

    // Confirm Password Validation
    if (!confirmPass) {
      conPassSpan.textContent = "Please confirm your password";
      conPassSpan.style.color = "red";
      isValid = false;
    } else if (password !== confirmPass) {
      conPassSpan.textContent = "Passwords do not match";
      conPassSpan.style.color = "red";
      isValid = false;
    }

    // If all validations pass
    if (isValid) {
      // Get existing users or create empty array
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      window.location.href = "../logIn/log-in.html";
    }
  });
});
