
let cartCount = 0;
let cartTotal = 0;

const cartCountElement = document.getElementById("cart-count");
const cartTotalElement = document.getElementById("cart-total");
const messageElement = document.getElementById("message");

const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const productName = button.dataset.name;
    const price = Number(button.dataset.price);

    cartCount++;
    cartTotal += price;

    cartCountElement.textContent = cartCount;

    cartTotalElement.textContent =
      cartTotal.toLocaleString("en-IN");

    messageElement.textContent =
      productName + " added to cart successfully!";

  });
});

