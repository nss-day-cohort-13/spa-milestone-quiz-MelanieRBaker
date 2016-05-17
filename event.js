// When you start typing into the navbar's text input, the description
// of the currently selected car should be bound to what you are typing in
// and match it exactly.

var carLot = (function(carLot) {
  var enterText = document.getElementById('addText');
  var allCards = document.getElementsByClassName('col-xs-4');
  var changeDesc =document.getElementsByClassName('changeDesc');
  var carId = ""

  carLot.activateEvents = function () {
    enterText.addEventListener("keyup", function(){
      if(enterText.length !== 0){
        changeDesc[carId].innerHTML = enterText.value;
      }
    });
    for (var a = 0; a < allCards.length; a++) {
      allCards[a].addEventListener("click", function(event){
        enterText.focus();
        enterText.value = "";
        console.log("event", event);
        for (var b = 0; b < allCards.length; b++) {
          allCards[b].classList.remove("backColor");
        }
        if (event.toElement.classList[0]=== "col-xs-4"){
          event.toElement.classList.toggle("backColor");
          carId = event.toElement.id;
        } else {
          event.toElement.parentNode.classList.toggle("backColor");
          carId = event.toElement.parentNode.id;
        }
      });
    }
  }
  return carLot;
}(carLot || {}));


// The final IIFE should augment the object with two more functions.
// One function resets the border thickness and background color for
// each car element back to the original values.




// The other function changes
// the thickness of the border of a car element, and changes its background color.
// The function must accept two arguments.
// 1.A car DOM element that was clicked on.
// 2.A color name.
