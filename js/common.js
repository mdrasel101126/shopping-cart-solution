function updateProductQuantity(isIncrease, id) {
  const productQuantityField = document.getElementById(id);
  const productQuantityString = productQuantityField.value;
  const prevQuantity = parseInt(productQuantityString);
  let newQuantity;
  if (isIncrease) {
    newQuantity = prevQuantity + 1;
  } else {
    newQuantity = prevQuantity - 1;
  }

  productQuantityField.value = newQuantity;

  return newQuantity;
}

function updatePrice(productTotalPrice, id) {
  const productPriceField = document.getElementById(id);
  productPriceField.innerText = productTotalPrice;
}

function totalPrice() {
  const mobileTotalPrice = parseInt(
    document.getElementById("mobile-price").innerText
  );
  const caseTotalPrice = parseInt(
    document.getElementById("case-price").innerText
  );
  const subTotal = mobileTotalPrice + caseTotalPrice;
  const tax = parseFloat((subTotal * 0.1).toFixed(2));
  const total = subTotal + tax;
  const subTotalField = document.getElementById("sub-total");
  const taxField = document.getElementById("tax");
  const totalField = document.getElementById("total");
  subTotalField.innerText = subTotal;
  taxField.innerText = tax;
  totalField.innerText = total;
}
