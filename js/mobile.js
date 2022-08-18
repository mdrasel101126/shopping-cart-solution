document
  .getElementById("btn-mobile-plus")
  .addEventListener("click", function () {
    const newMobileQuantity = updateProductQuantity(true, "mobile-value");
    const totalMobilePrice = newMobileQuantity * 1219;
    updatePrice(totalMobilePrice, "mobile-price");
    totalPrice();
  });

document
  .getElementById("btn-mobile-minus")
  .addEventListener("click", function () {
    const newMobileQuantity = updateProductQuantity(false, "mobile-value");
    const totalMobilePrice = newMobileQuantity * 1219;
    updatePrice(totalMobilePrice, "mobile-price");
    totalPrice();
  });
