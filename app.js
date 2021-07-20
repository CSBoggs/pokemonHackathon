// Simple user selection links, logs to cookie
var squirtle = document.getElementById("squirtle");
squirtle.addEventListener("click", function () {
    Cookies.set("name", "squirtle");
});
var charmander = document.getElementById("charmander");
charmander.addEventListener("click", function () {
    Cookies.set("name", "charmander");
});
var bulbasaur = document.getElementById("bulbasaur");
bulbasaur.addEventListener("click", function () {
    Cookies.set("name", "bulbasaur");
});

