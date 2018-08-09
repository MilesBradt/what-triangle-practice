//BMI Calculator
// var bmi = function(weight, height){
//   return  weight / (height**2) * 703
// }
//
// var weight = parseInt(prompt("weight"));
// var height = parseInt(prompt("height"));
//
// var result = bmi(weight, height);
//
// alert(result);

//Celsius to Freedom
// var fahrenheit = function(celsius){
//   return celsius * (9/5) + 32
// };
//
// var celsius = parseInt(prompt("Temp in celsius, please: "));
//
// var result = fahrenheit(celsius);
//
// alert(result);

//Cooking
// var teaspoon = function(tablespoon){
//   return tablespoon * 3
// };
//
// var tablespoon = parseInt(prompt("How many tablespoons do you have?"));
// var result = teaspoon(tablespoon);
//
// alert("You have " + result + " teaspoons.");

//UI Calculator

  //Business logic

  //UI Logic
$(document).ready(function() {
  $("button#add").click(function(event) {
    event.preventDefault();
    var sideA = parseInt($("#input1").val());
    var sideB = parseInt($("#input2").val());
    var sideC = parseInt($("#input3").val());

    if (sideA === sideB && sideA === sideC && sideB === sideC) {
      $("#output").text("Equilateral");
    }

    else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      $("#output").text("Isosceles");
    }

    else if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
        $("#output").text("Not a Triangle");
    }

    else $("#output").text("Scalene");

  });
});
