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

// Battle sequence logic

function makePokemonSprite(pokemonSelected) {
    var pokemonSprite = document.createElement("div");
    pokemonSprite.classList.add("userPokemonSprite");
    pokemonSprite.id = pokemonSelected;

    var pokemonName = document.createElement('h2');
    pokemonName.innerText = pokemonSelected;
    pokemonSprite.appendChild(pokemonName);

    var pokemonImage = document.createElement("img");
    pokemonImage.src = '/Projects/Pokemon/images/squirtle.png';
    pokemonSprite.appendChild(pokemonImage);

    var pokemonHealth = document.createElement('p');
    pokemonHealth.innerText = pokemonSelected.health;


    var pokemonAttack = document.createElement('p');
    pokemonAttack.innerText = pokemonSelected.attack;

    return pokemonSprite;
}

pokemonBattle();

function pokemonBattle() {

    var userPokemon = selectedPokemon(pokemonSelected);
    var userPokemonSprite = makePokemonSprite(userPokemon);
    battleViewport.id = userPokemon;
    userPokemonSprite.append(userPokemon);
}

//     var cpuPokemon = selectedPokemon(pokemonSelected);
//     cpuPkm = userPokemon;
//     cpuPokemonSprite.append(userPokemon);
// }