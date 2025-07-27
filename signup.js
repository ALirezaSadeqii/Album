"use strict";
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
  window.location.href = "index.html";
});
