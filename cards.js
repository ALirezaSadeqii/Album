"use strict";
const albumContainer = document.querySelector(".albumContainer");
const albumCards = Array.from(albumContainer.children);

albumCards.forEach((card) => {
  albumContainer.appendChild(card.cloneNode(true));
});

let currentPosition = 0;

function slideAlbums() {
  currentPosition -= 1;

  const firstSetWidth = albumCards.length * (250 + 24);

  if (Math.abs(currentPosition) >= firstSetWidth) {
    currentPosition = 0;
  }

  albumContainer.style.transform = `translateX(${currentPosition}px)`;
  requestAnimationFrame(slideAlbums);
}

requestAnimationFrame(slideAlbums);
