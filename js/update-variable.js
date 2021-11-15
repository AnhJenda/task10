// Create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;

// Some other processing might go here and, as a result, the script might need to change their values
inStock = false;
shipping = true;

// Get the element that has an id of stock
var elStock = document.getElementById('stock');

// Set class name with value of inStock variable
elStock.className = inStock;

// Get the element that has an id of shipping
var elShipping = document.getElementById('shipping');

// Set class name with value of shipping variable
elShipping.className = shipping;