// Pokemon array
var pkmList = [
    {
        pokemon: 'squirtle',
        image: '/Projects/Pokemon/images/Squirtle.png',
        hp: 100,
        attack: 50
    },
    {
        pokemon: 'charmander',
        image: '/Projects/Pokemon/images/Charmander.png',
        hp: 100,
        attack: 50
    },
    {
        pokemon: 'bulbasaur',
        image: '/Projects/Pokemon/images/Bulbasaur.png',
        hp: 100,
        attack: 50
    }
]

var pokemonSelected = Cookies.get("name");

function selectedPokemon(pokemonSelected) {
    for (var i = 0; i < pkmList.length; i++) {
        let pkm = pkmList[i];
        if (pkm.pokemon === pokemonSelected) {
            return pkm.pokemon;
        }
    } return "No pokemon found";
}


// Battlepage variable declaration
var header = document.getElementById("header");
var userPokemon = document.getElementById("userPokemon");
var cpuPokemon = document.getElementById("cpuPokemon");
var battleViewport = document.getElementById("battleViewport");
var userAttacks = document.getElementById("userAttacks");
var cpuAttacks = document.getElementById("cpuAttacks");
var Currenthealth = 100;
var usermaxHealth = 100;
var chosenPokemon = [];

// function update(){
//     Cookies.set("battle", chosenPokemon, {expires: 10});
// }

function PokemonSelect(element){
    var parent = element.parentElement;
    var imgSrc = parent.querySelector('img').getAttribute('src');
    var Pname = parent.querySelector('h3').innerText;
    var PokemonInfo = {
        imgLink : imgSrc,
        name : Pname,
    }
    chosenPokemon.push(info);
    update();
}

// Clear html element function to reset gamestate

function clearElement(myElement) {
    while (myElement.firstChild) {
        myElement.removeChild(myElement.lastChild);
    }
}

// Battle sequence logic

pokemonBattle();

function pokemonBattle() {
    clearElement(userPokemon);
    clearElement(cpuPokemon);
}

function makePokemonSprite(pokemonSelected) {
    var pokemonSprite = document.createElement("div");
    pokemonSprite.classList.add(userPokemonSprite);
    pokemonSprite.id = pokemonSelected;

    var pokemonName = document.createElement('h2');
    pokemonName.innerText = pokemonSelected;
    pokemonSprite.appendChild(pokemonName);

var userPokemon = selectedPokemon(pokemonSelected);
var userPokemonSprite = makePokemonSprite(pokemonSelected);
battleViewport.id = userPokemon;
userPokemonContainer.append(userPokemon);

var cpu = selectedPokemon(pokemonSelected);
cpuPkm = userPokemon;
cpuPokemonContainer.appendChild(userPokemon);


// var value = Cookies.get("name");
// console.log(value);
// var name = JSON.parse(value);

