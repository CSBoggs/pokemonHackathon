// Pokemon array
var pkmList = [
    {
        pokemon: 'squirtle',
        image: '/Projects/Pokemon/images/squirtle.png',
        hp: 100,
        hpCapacity: 100,
        attack: 50
    },
    {
        pokemon: 'charmander',
        image: '/Projects/Pokemon/images/charmander.png',
        hp: 100,
        hpCapacity: 100,
        attack: 50
    },
    {
        pokemon: 'bulbasaur',
        image: '/Projects/Pokemon/images/bulbasaur.png',
        hp: 100,
        hpCapacity: 100,
        attack: 50
    }
]

// Rematch button
var restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", function () {
    document.location.href = "index.html";
});

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
            return pkm;
        }
    } return "No pokemon found";
}

// create user selected pokemon containers, image, and stats

function makePokemonSprite(pokemonSelected) {
    var pokemonSprite = document.createElement("div");
    pokemonSprite.classList.add("userPokemonSprite");
    pokemonSprite.id = pokemonSelected;

    var pokemonName = document.createElement('h2');
    pokemonName.innerText = pokemonSelected.pokemon;
    pokemonSprite.appendChild(pokemonName);

    var userImageContainer = document.createElement('div');
    userImageContainer.classList.add("pokemonImageContainer");
    var pokemonImage = document.createElement("img");
    pokemonImage.src = "/Projects/Pokemon/images/"+pokemonSelected.pokemon+".png";
    userImageContainer.appendChild(pokemonImage);
    pokemonSprite.appendChild(userImageContainer);

    var pokemonStats = document.createElement("div");
    var pokemonHealth = document.createElement('p');
    pokemonHealth.classList.add("HPStat");
    pokemonHealth.innerText = "HP:"+pokemonSelected.hp+"/"+pokemonSelected.hpCapacity;
    pokemonStats.appendChild(pokemonHealth);
    var pokemonAttack = document.createElement('p');
    pokemonAttack.classList.add("ATKStat");
    pokemonAttack.innerText = "ATK:"+pokemonSelected.attack;
    pokemonStats.appendChild(pokemonAttack);
    pokemonSprite.appendChild(pokemonStats);

    return pokemonSprite;
}

// Battle logic

pokemonBattle();

function pokemonBattle() {
    var redo = document.getElementById('restartButton');
    redo.classList.add("hidden")

    header.innerText = "Fight!";

    var userPokemon = selectedPokemon(pokemonSelected);
    var pokemonSprite = makePokemonSprite(userPokemon);
    pokemonSprite.id = 'userPokemon';
    userPokemonContainer.append(pokemonSprite);

    var cpuPokemon = {...userPokemon};
    var cpuPokemonSprite = makePokemonSprite(userPokemon);
    cpuPokemonSprite.id = 'cpuPokemon';
    cpuPokemonContainer.append(cpuPokemonSprite);

    var createAttack = document.createElement("button");
    createAttack.innerText = "Attack!";
    createAttack.addEventListener('click', function () {
        if (gameOver == 0) {
            playerTurn(userPokemon, cpuPokemon);
        }
    });
    userAttacks.appendChild(createAttack);
}

function refreshScreen(userPokemon, cpuPokemon) {
    var pokemonSprite = document.getElementById('userPokemon');
    var cpuPokemonSprite = document.getElementById('cpuPokemon');
    var pokemonHealth = document.getElementsByClassName("HPStat");
    pokemonHealth[0].innerText = userPokemon.hp + "/" + userPokemon.hpCapacity;
    pokemonHealth[1].innerText = cpuPokemon.hp + "/" + cpuPokemon.hpCapacity;
}

function playerTurn(userPokemon, cpuPokemon) {
    cpuPokemon.hp -= userPokemon.attack;
    console.log(cpuPokemon);
    if (cpuPokemon.hp <= 0) {
        declareWinner(1);
    } else {
        userPokemon.hp -= cpuPokemon.attack;
        if (userPokemon.hp <= 0) {
            declareWinner(0);
        }
    } refreshScreen(userPokemon, cpuPokemon)
}

function declareWinner(isaWin) {
    var declaredWinner = document.createElement("p");
    if (isaWin = true) {
        declaredWinner.innerText = "Player wins!";
    } else {
        (!isaWin);
        declaredWinner.innerText = "CPU wins!";
    }
    var redo = document.getElementById('restartButton');
    redo.classList.remove("hidden")
    gameOver = 1;
    header.appendChild(declaredWinner);
}


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
