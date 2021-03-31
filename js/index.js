// ITERATION 1

let grandTot = 0;

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //create variables
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  //subtotal
  const subtotal = price * quantity;
  const subtotalValue = product.querySelector('.subtotal span');
  subtotalValue.innerText = subtotal;
  grandTot += subtotal;
  return subtotal;

}

function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArr = [...products];
  const total = document.querySelector('#total-value span');

  productsArr.forEach(function (item) {
    updateSubtotal(item);
    console.log(grandTot);
  });
  // ITERATION 3
  total.innerText = grandTot;
  grandTot = 0;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = target.parentNode.parentNode;
  row.remove();
  calculateAll();

  //remove child


  // change quantity
  // let quantityValue = document.querySelector('.quantity input').value;
  // console.log(quantityValue);
  // quantityValue--;
  // console.log(quantityValue);
  // let quantity = document.querySelector('.quantity input');
  // quantity.innerText = quantityValue;
  // call subtotal with new quantity 
}

// ITERATION 5

function createProduct() {
  console.log("let's create a product");
  const newProduct = document.createElement('tr');
  newProduct.classList.add("product");
  const tabBody = document.querySelector('.bodytab');
  newProduct.innerHTML = `<td class="added-name">
  <span> </span>
  </td>
  <td class="added-price">$<span id="priceNum"> </span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>`;
  console.log(newProduct);
  tabBody.appendChild(newProduct);

  // get name 
  const newName = document.querySelector('.added-name');
  const prodName = document.querySelector('.newName').value;

  //and Price 
  const newPrice = document.querySelector('.added-price span');
  const prodPrice = document.querySelector('.newPrice').value;

  console.log(newName);
  console.log(newPrice);
  // add them 
  newName.innerText = prodName;
  newPrice.innerText = prodPrice;
}


window.addEventListener('load', () => {
  //calculatePricesBtn
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //removeButtons 
  const removeButtons = document.getElementsByClassName('btn-remove');
  const buttonsArr = [...removeButtons];
  buttonsArr.forEach(function (item) {
    item.addEventListener('click', removeProduct);
  });

  //createButton
  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);

});