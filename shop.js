"use strict";
let count = 0;

const countDisplays = document.querySelectorAll(".count");
const decreaseButtons = document.querySelectorAll(".decrease");
const increaseButtons = document.querySelectorAll(".increase");
const icon = document.querySelectorAll(".icon");
const text = document.querySelectorAll(".added");

countDisplays.forEach((display) => {
  display.textContent = "0";
});

decreaseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (count > 0) {
      count--;
      countDisplays[index].textContent = count;
    }
  });
});

increaseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    count++;
    countDisplays[index].textContent = count;
  });
});
icon.forEach((i, index) => {
  i.addEventListener("click", () => {
    text[index].textContent = "Added !";
    count = 0;
  });
});
