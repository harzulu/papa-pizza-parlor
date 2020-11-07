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

function Topping(name, type) {
  this.name = name
  this.type = type;
 // this.size = size;
  this.cost = 0;
}

UserInfo.prototype.addInfo = function(name, address) {
  this.name = name;
  this.address = address;
}

Topping.prototype.setCost = function () {
  if (this.type === "meat") {
    this.cost = 0.75;
  } else {
    this.cost = 0.50;
  }
//  if (this.size === "extra") {
//    this.cost += 0.25;
//  }
} 

Pizza.prototype.setSize = function(size) {
  this.size = size;
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

/*function toppingsSize(toppings) {
  let old_html = $(".topping").html();
  let array = [];
  toppings.forEach(function(topping) {
    $("#toppingName").html(topping);
    $(".topping").submit(function() {
      let size = $("#toppingSize").val();
      let finalTopping = new Topping(topping, size);
      array.push(finalTopping);
    });
    $(".topping").html(old_html);
    $(".topping").show();
  });
  $(".topping").hide();
  return array;
};*/

function makeToppings(array, type) {
  let toppingsArray = [];
  array.forEach(function(topping) {
    let toppingObject = new Topping(topping, type);
    toppingObject.setCost();
    toppingsArray.push(toppingObject);
  });
  return toppingsArray;
}

function makeResults(pizza) {
  $("#pizzaSize").html(pizza.size);
  (pizza.toppings).forEach(function(topping) {
    $("#toppingsList").append("<li>" + topping.name + "</li>")
  });
  $("#pizzaPrice").html(pizza.cost);
  $(".result").slideDown();
}

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
    let size = $(".size").val();
    alert(size);
    user.addInfo(name, address);
    pizza.setSize(size);
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
 //   let toppingsArr = toppingsSize(veggies);
 //   toppingsArr.forEach(function(topping) {
    veggiesArr = makeToppings(veggies, "veggie");
    veggiesArr.forEach(function(topping) {
      pizza.addTopping(topping);
    });
    $(".meats").slideDown();
  });

  $(".meats").submit(function(event) {
    event.preventDefault();
    let meats = [];
    $("input:checkbox[name=meat]:checked").each(function() {
      meats.push($(this).val());
    });
    $(".meats").slideUp();
    //$(".topping").show();
 //   let toppingsArr = toppingsSize(meats);
 //   toppingsArr.forEach(function(topping) {
    meatArr = makeToppings(meats, "meat");
    meatArr.forEach(function(meat) {
      pizza.addTopping(meat);
    });
    makeResults(pizza);
    });
});