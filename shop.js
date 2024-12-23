let counts = new Array(document.querySelectorAll(".count").length).fill(0);

const countDisplays = document.querySelectorAll(".count");
const decreaseButtons = document.querySelectorAll(".decrease");
const increaseButtons = document.querySelectorAll(".increase");
const icon = document.querySelectorAll(".icon");
const text = document.querySelectorAll(".added");
const cards = document.querySelectorAll(".carde");

const savedCounts = JSON.parse(localStorage.getItem("counts") || "[]");
if (savedCounts.length > 0) {
  counts = savedCounts;
  counts.forEach((count, index) => {
    countDisplays[index].textContent = count;
  });
}

const getAlbumDetails = (index) => {
  const card = cards[index];
  const prices = [29.99, 24.99, 27.99, 22.99, 25.99];
  return {
    title: card.querySelector("h2").textContent,
    image: card.querySelector("img").src,
    quantity: counts[index],
    price: prices[index],
  };
};

decreaseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (counts[index] > 0) {
      counts[index]--;
      countDisplays[index].textContent = counts[index];
      localStorage.setItem("counts", JSON.stringify(counts));
    }
  });
});

increaseButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    counts[index]++;
    countDisplays[index].textContent = counts[index];
    localStorage.setItem("counts", JSON.stringify(counts));
  });
});

icon.forEach((i, index) => {
  i.addEventListener("click", () => {
    if (counts[index] > 0) {
      const item = getAlbumDetails(index);
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      text[index].textContent = "Added!";
      text[index].classList.remove("hidden");
      counts[index] = 0;
      countDisplays[index].textContent = "0";
      localStorage.setItem("counts", JSON.stringify(counts));

      setTimeout(() => {
        text[index].classList.add("hidden");
      }, 2000);
    }
  });
});
