// Business Logic

function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function() {
  this.toppings.forEach(function(topping) {
    this.topping += 1;
  })
  if(this.size === "small") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 4;
  }else if (this.size === "large") {
    this.price += 8;
  }
Pizza.protorype.getPrice = function(){
return this.price;
}
}


// User Interface Logic
var Pizza = new Pizza();

$(document).ready(function(event) {
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
    var toppingsInput = $("#toppings:checked").val();
    var toppingsArray = [];
    var sizeInput = $("#size").val();
    var summary = (size + toppings);

    toppingsInputs.forEach(function(toppingInput) {
      toppingsArray.push(toppingInput.val());
    });

    var newPizza = new Pizza(sizeInput,toppingsArray);
    var price = Pizza.getPrice();

    return this.size + this.toppings;
  })
})
