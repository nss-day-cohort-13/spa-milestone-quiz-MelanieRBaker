var carlot = (function(carlot) {

  var auto;
  var rowLine = document.getElementById("row");

// List of all of the inventory details in inventory.json
  var inventory = new XMLHttpRequest();

  inventory.addEventListener("load", function() {
    auto = JSON.parse(this.responseText);
    console.log("auto", auto);
    var allCars = ""

    // for loop to get the different make of cars from inventory.JSON
    for (var a = 0; a < auto.cars.length; a++) {
      var mobile = auto.cars[a]
      allCars += "<div class = 'col-xs-4'>" +
                    "<div>" + mobile.make + "</div>" +
                    "<div>" + mobile.model + "</div>" +
                    "<div>" + mobile.year + "</div>" +
                    "<div>" + mobile.price + "</div>" +
                    "<div>" + mobile.color + "</div>" +
                    "<div>" + mobile.purchased + "</div>" +
                    "<div>" + mobile.description + "</div>" +
                 "</div>"
      console.log("mobile.make", mobile.make);
      console.log("mobile.model", mobile.model);
      console.log("mobile.year", mobile.year);
      console.log("mobile.price", mobile.price);
      console.log("mobile.color", mobile.color);
      console.log("mobile.purchased", mobile.purchased);
      console.log("mobile.description", mobile.description);

   }
   rowLine.innerHTML = allCars;

  });










  inventory.open("GET", "inventory.JSON");
  inventory.send();


    return carlot;
  }(carlot || {}));

