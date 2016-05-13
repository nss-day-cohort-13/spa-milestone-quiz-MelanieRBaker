var carLot = (function(carLot) {

  var auto;
  var rowLine = document.getElementById("row");

// List of all of the inventory details in inventory.json
  var inventory = new XMLHttpRequest();

  inventory.addEventListener("load", function() {
    auto = JSON.parse(this.responseText);
    auto = auto.cars
    populatePage(auto);
    console.log("auto", auto);

  });

  inventory.open("GET", "inventory.JSON");

  carLot.loadInventory = function() {
    inventory.send();
  }

  carLot.getInventory = function() {
    return auto;
  }
    return carLot;
}(carLot || {}));

// 1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern
// to augment it two times in separate JavaScript files.

// 1. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json`
// file and stores the inventory in a private variable. It should also expose a public getter to read the
// array of cars (e.g. `getInventory`).
