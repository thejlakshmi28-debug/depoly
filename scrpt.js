```javascript
let cartCount = 0;
let cartTotal = 0;

const cartCountElement =
  document.getElementById("cart-count");

const cartTotalElement =
  document.getElementById("cart-total");

const messageElement =
  document.getElementById("message");

const buttons =
  document.querySelectorAll(".add-btn");


buttons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Get product details
    const productName =
      button.dataset.name;

    const price =
      Number(button.dataset.price);


    // Update cart
    cartCount++;

    cartTotal += price;


    // Update cart count
    cartCountElement.textContent =
      cartCount;


    // Update total price
    cartTotalElement.textContent =
      cartTotal.toLocaleString("en-IN");


    // Show success message
    messageElement.textContent =
      productName +
      " added to cart successfully!";

  });

});
```
