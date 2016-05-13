var rowLine = document.getElementById("row");



// for loop to get the different make of cars from inventory.JSON
function populatePage (cars) {
  var allCars = ""
  for (var a = 0; a < cars.length; a++) {
    var mobile = cars[a]
    allCars += "<div class = 'col-xs-4 lineThick' id='" + a + "' style='border-color:" + mobile.color + "'>"+
                  "<div>Make: " + mobile.make + "</div>" +
                  "<div>Model: " + mobile.model + "</div>" +
                  "<div>Year: " + mobile.year + "</div>" +
                  "<div>Price: " + mobile.price + "</div>" +
                  "<div>Color: " + mobile.color + "</div>" +
                  "<div>Purchased: " + mobile.purchased + "</div>" +
                  "<div class='changeDesc'>Description: " + mobile.description + "</div>" +
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

  carLot.activateEvents();

}
carLot.loadInventory();
