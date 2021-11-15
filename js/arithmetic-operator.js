// Create a variable for the subtotal and make a calculation
var subtotal = (13 + 1) * 5; // subtotal = 70

// Create a variable for the shipping and make a calculation
var shipping = 0.5 * (13 + 1); // shipping = 7

// Create the total by combining the subtotal and shipping values
var total = subtotal + shipping; // total = 77

// Write the result to the screen
var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;