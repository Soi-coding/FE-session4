/* product detail page - JS */
document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.querySelector(".quantity-minus");
  const plusBtn = document.querySelector(".quantity-plus");
  const quantitySpan = document.getElementById("quantity-value");
  const totalPriceSpan = document.getElementById("total-price");

  const unitPrice = parseInt(totalPriceSpan.innerText.replace(/,/g, ""));

  let quantity = 1;

  function updateTotalPrice() {
    const total = unitPrice * quantity;
    totalPriceSpan.innerText = total.toLocaleString();
  }

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantitySpan.innerText = quantity;
      updateTotalPrice();
    }
  });

  plusBtn.addEventListener("click", () => {
    quantity++;
    quantitySpan.innerText = quantity;
    updateTotalPrice();
  });
});
