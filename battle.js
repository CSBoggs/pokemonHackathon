// Pokemon array
var pkmList = [
    {
        pokemon: 'squirtle',
        image: '/Projects/Pokemon/images/squirtle.png',
        hp: 100,
        attack: 50
    },
    {
        pokemon: 'charmander',
        image: '/Projects/Pokemon/images/charmander.png',
        hp: 100,
        attack: 50
    },
    {
        pokemon: 'bulbasaur',
        image: '/Projects/Pokemon/images/bulbasaur.png',
        hp: 100,
        attack: 50
    }
]

// Battlepage variable declaration
const header = document.getElementById("header");
const userPokemonContainer = document.getElementById("userPokemon");
const cpuPokemonContainer = document.getElementById("cpuPokemon");
const battleViewport = document.getElementById("battleViewport");
const userAttacks = document.getElementById("userAttacks");
const cpuAttacks = document.getElementById("cpuAttacks");
let gameOver = 0;

// Function to get selected pokemon from cookie

var pokemonSelected = Cookies.get("name");

function selectedPokemon(pokemonSelected) {
    for (var i = 0; i < pkmList.length; i++) {
        let pkm = pkmList[i];
        if (pkm.pokemon === pokemonSelected) {
            return pkm.pokemon;
        }
    } return "No pokemon found";
}

// create user selected pokemon containers, image, and stats

function makePokemonSprite(pokemonSelected) {
    var pokemonSprite = document.createElement("div");
    pokemonSprite.classList.add("userPokemonSprite");
    pokemonSprite.id = pokemonSelected;

    var pokemonName = document.createElement('h2');
    pokemonName.innerText = pokemonSelected;
    pokemonSprite.appendChild(pokemonName);

    var userImageContainer = document.createElement('div');
    userImageContainer.classList.add("pokemonImageContainer");
    var pokemonImage = document.createElement("img");
    pokemonImage.src = "/Projects/Pokemon/images/"+pokemonSelected+".png";
    userImageContainer.appendChild(pokemonImage);
    pokemonSprite.appendChild(userImageContainer);

    var pokemonStats = document.createElement("div");
    var pokemonHealth = document.createElement('p');
    pokemonHealth.innerText = pokemonSelected.health;
    pokemonStats.appendChild(pokemonHealth);
    var pokemonAttack = document.createElement('p');
    pokemonAttack.innerText = pokemonSelected.attack;
    pokemonStats.appendChild(pokemonAttack);
    pokemonSprite.appendChild(pokemonStats);

    return pokemonSprite;
}

// Battle logic

pokemonBattle();

function pokemonBattle() {

    header.innerText = "Fight!";

    var userPokemon = selectedPokemon(pokemonSelected);
    var pokemonSprite = makePokemonSprite(userPokemon);
    pokemonSprite.id = 'userPokemon';
    userPokemonContainer.append(pokemonSprite);
}

//     var cpuPokemon = selectedPokemon(pokemonSelected);
//     cpuPkm = userPokemon;
//     cpuPokemonSprite.append(userPokemon);
// 

// function update(){
//     Cookies.set("battle", chosenPokemon, {expires: 10});
// }

// function PokemonSelect(element){
//     var parent = element.parentElement;
//     var imgSrc = parent.querySelector('img').getAttribute('src');
//     var Pname = parent.querySelector('h3').innerText;
//     var PokemonInfo = {
//         imgLink : imgSrc,
//         name : Pname,
//     }
//     chosenPokemon.push(info);
//     update();
// }
