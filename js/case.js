document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseQuantity = updateProductQuantity(true, "case-value");
  const totalCasePrice = newCaseQuantity * 59;
  updatePrice(totalCasePrice, "case-price");
  totalPrice();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseQuantity = updateProductQuantity(false, "case-value");
    const totalCasePrice = newCaseQuantity * 59;
    updatePrice(totalCasePrice, "case-price");
    totalPrice();
  });
