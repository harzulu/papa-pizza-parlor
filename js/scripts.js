//Business Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.setPrice = function() {
  if (this.size === "large") {
    this.price = 12.99;
  } else if (this.size === "medium") {
    this.price = 9.99;
  } else {
    this.price = 7.99;
  }
}


//UI Logic
$(document).ready(function() {

});