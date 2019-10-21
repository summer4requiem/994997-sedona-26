var mapButton =  document.querySelector(".map-button");
var popup = document.querySelector(".reservation-form");
var datefield = popup.querySelector("[name=check-in]");
var mapShow = document.querySelector(".map-insurance");


mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-hide");
    datefield.focus();
});
   popup.classList.toggle("form-hide");
 
mapShow.classList.add("map-offline");






  

