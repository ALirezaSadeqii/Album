"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbar");
  const footerHolder = document.getElementById("footer");

  fetch("header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error loading navbar: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      navbarPlaceholder.innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });

  fetch("footer.html")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error loading navbar: ${res.statusText}`);
      }
      return res.text();
    })
    .then((data) => {
      footerHolder.innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
});
