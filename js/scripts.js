// Business Logic

function Pizza(size,toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.price = function(){
  this.toppings.forEach(functio(topping))
    this.topping += 1;
  }
  if(this.size === "small") {
    this.price += 10;
  } else if (this.size === "medium") {
    this.price += 4;
  }else if (this.size === "large") {
    this.price += 8;
  }
console.log();
// return this.price;

// User Interface Logic

$(document).ready(function(event) {
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();
    var toppingsInput = $("#toppings:checked");
    var toppingsArray = [];
    var sizeInput = $("#size").val();

    toppingsInputs.forEach(function(toppingInput) {
      toppingsArray.push(toppingInput.val());
    });

    var Pizza = new Pizza(SizeInput,ToppingsArray);
    var price = Pizza.getPrice();

  })
})
