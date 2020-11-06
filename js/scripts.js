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

function toppingsSize(toppings) {
  let array = [];
  toppings.forEach(topping) {
    $(".topping").show();
    $("#toppingName").html(topping);
    $(".topping").submit(function() {
      let size = $("#toppingSize").val();
      let finalTopping = new Topping(topping, size);
      array.push(finalTopping);
    });
  };
}

$(document).ready(function() {
  $(".intro").submit(function(event) {
    event.preventDefault();
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
  $(".veggies").submit(function(event) {
    event.preventDefault();
    let veggies = [];
    let meats = [];
    $("input:checkbox[name=veggie]:checked").each(function() {
      veggies.push($(this).val());
    });
  });
  $(".meats").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=meat]:checked").each(function() {
      meats.push($(this).val());
    });
  });

});