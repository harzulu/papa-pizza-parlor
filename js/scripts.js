//Business Logic
function Pizza() {
  this.size;
  this.toppings = [];
  this.price = 0;
}

function UserInfo() {
  this.name;
  this.address = [];
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

UserInfo.prototype.addInfo = function(name, address) {
  this.name = name;
  this.address = address;
}

Pizza.prototype.setSize = function(size) {
  this.size = size;
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
  let old_html = $(".topping").html();
  let array = [];
  $(".topping").show();
  toppings.forEach(function(topping) {
    $(".topping").html(old_html);
    $("#toppingName").html(topping);
    $(".topping").submit(function() {
      let size = $("#toppingSize").val();
      let finalTopping = new Topping(topping, size);
      array.push(finalTopping);
    });
  });
  $(".topping").hide();
  return array;
};

$(document).ready(function() {
  let user = new UserInfo();
    let pizza = new Pizza();
  $(".intro").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let address = [];
    address.push($("#address").val());
    address.push($("#city").val());
    address.push($("#state").val());
    address.push($("#zip").val());
    let size = $("size").val();
    user.addInfo(name, address);
    pizza.setSize(size);
    pizza.setPrice();
    $(".intro").slideUp();
    $(".veggies").slideDown();
  });
  $(".veggies").submit(function(event) {
    event.preventDefault();
    let veggies = [];
    $("input:checkbox[name=veggie]:checked").each(function() {
      veggies.push($(this).val());
    });
    $(".veggies").slideUp();
    $(".meats").slideDown();
  });
  $(".meats").submit(function(event) {
    event.preventDefault();
    let meats = [];
    $("input:checkbox[name=meat]:checked").each(function() {
      meats.push($(this).val());
    });
    $(".meats").slideUp();
    $(".topping").slideDown();
    toppingsArr = toppingsSize(veggies);
    toppingsArr.forEach(function(topping) {
      pizza.addTopping(topping);
    });
  });

});