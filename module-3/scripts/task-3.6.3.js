//Mouse over task

/*
var button = document.getElementById("myBtn");
button.addEventListener("mouseover", function (event) {
alert("Hi Rollover!");
});
*/

var button = document.getElementById("myBtn");
var sayHi = function (mouseover) {
    alert("Hi Rollover!");
};

button.addEventListener("mouseover", sayHi);

//Mouse Click
/*
var button = document.getElementById("myBtn2");
button.addEventListener("click", function (event) {
alert("Hi Click!");
});
*/

var button = document.getElementById("myBtn2");
var sayHi = function (click) {
    alert("Hi Click!");
};

button.addEventListener("click", sayHi);
