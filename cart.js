"use strcit";
document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const totalItems = document.getElementById("total-items");
  const resetBtn = document.getElementById("resetCart");

  function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";
      itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div>
                <h3>${item.title}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price}</p>
                <p>Total: $${itemTotal.toFixed(2)}</p>
            </div>
        `;
      cartItems.appendChild(itemElement);
    });

    totalItems.textContent = cart.length;
    document.getElementById("total-price").textContent = total.toFixed(2);
  }
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("counts");
    displayCart();
  });

  displayCart();
});
