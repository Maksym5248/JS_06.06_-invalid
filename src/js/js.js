var buttonMenu = document.querySelector(".button_menu_form");
var containerForm = document.querySelector(".container_form");
var containerText = document.querySelector(".container_text");
var form1 = document.querySelector(".form1");
var form2 = document.querySelector(".form2");
var form3 = document.querySelector(".form3");
var num = 0;

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");


buttonMenu.addEventListener("click", function (e) {
    e.preventDefault();
        if ( num == 0 ){
            containerForm.style.margin = "0";
            containerText.style.width = "60%";
            num = num + 1;
        } else if (num == 1) {
            containerForm.style.margin = "0 0 0 -450px";
            containerText.style.width = "95%";
            num = num - 1;
        }
});

btn1.addEventListener("click", function (e) {
    e.preventDefault();
    form1.style.display = "inline-block";
    form2.style.display = "none";
    form3.style.display = "none";
    btn1.style.background = "red";
    btn2.style.background = "none";
    btn3.style.background = "none";

});

btn2.addEventListener("click", function (e) {
    e.preventDefault();
    form1.style.display = "none";
    form2.style.display = "inline-block";
    form3.style.display = "none";
    btn1.style.background = "none";
    btn2.style.background = "red";
    btn3.style.background = "none";

});

btn3.addEventListener("click", function (e) {
    e.preventDefault();
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "inline-block";
    btn1.style.background = "none";
    btn2.style.background = "none";
    btn3.style.background = "red";

});

form1.addEventListener("submit", function (e) {
    e.preventDefault();
    btn1.style.background = "none";
    btn2.style.background = "red";
    btn3.style.background = "none";
    form1.style.display = "none";
    form2.style.display = "inline-block";
    form3.style.display = "none";

});

form2.addEventListener("submit", function (e) {
    e.preventDefault();
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "inline-block";
    btn1.style.background = "none";
    btn2.style.background = "none";
    btn3.style.background = "red";
});


for (var i = 0; i < form1. elements.length; i++){
    var curr = form1.elements[i];
    curr.addEventListener("invalid", function (e) {
        if( this.willValidate && !this.validity.valid){
            alert(this.validationMessage);
        }
    });
}

form1.addEventListener("submit", function (e) {
    if (!this.checkValidity()){
        alert ("ggggggg");
    }
    e.preventDefault();
});
