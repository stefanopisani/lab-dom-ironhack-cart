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
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});