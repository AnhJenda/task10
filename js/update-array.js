// Create an array and assign its values
var colors;
colors = ['white', 'black', 'custom'];

// Update the third item in the array
colors[2] = 'Beige';

// Get element with an id of colors
var el = document.getElementById('colors');

// Replace element with third item from the array
el.textContent = colors[2];