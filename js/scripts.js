//Business Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

function User(name, address) {
  this.name = name;
  this.address = address;
}

function Topping(type) {
  this.type = type;
  this.size;
  this.cost = 0;
}

Topping.prototype.setSize = function(size) {
  this.size = size;
}

Topping.prototype.setCost = function () {
  if (this.type === 'meat') {
    this.cost = 0.75;
  } else {
    this.cost = 0.50;
  }
  if (this.size === "large") {
    this.cost += 0.25;
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
  $(".intro").submit(function() {
    let name = $("#name").val();
    let address = [];
    address.push($("#address").val());
    address.push($("#city").val());
    address.push($("#state").val());
    address.push($("#zip").val());
    let size = $("size").val();
    let user = new User(name, address);
    let pizza = new Pizza(size);
  });

});