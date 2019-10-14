var mapButton =  document.querySelector(".map-button");
var popup = document.querySelector(".reservation-form");
var datefield = popup.querySelector("[name=check-in]");


mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
    datefield.focus();
});



  

