//Business Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

function Topping(type) {
  this.type = type;
  this.cost = 0;
}

Topping.prototype.setCost = function () {
  if (this.type === 'meat') {
    this.cost = 0.75;
  } else {
    this.cost = 0.50;
  }
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

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
  this.price += topping.cost;
}


//UI Logic
$(document).ready(function() {

});