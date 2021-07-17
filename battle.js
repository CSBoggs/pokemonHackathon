var chosenPokemon[];

function update(){
    Cookies.set("battle", chosenPokemon);
}

function PokemonSelect(element){
    var parent = element.parentElement;
    var imgSrc = parent.querySelector('img').getAttribute('src');
    var Pname = parent.querySelector('h3').innerText;
    var PokemonInfo ={
        imgLink : imgSrc,
        name : Pname,
    }
    chosenPokemon.push(info);
    update();
}




// Clear element function to reset gamestate

function clearElement(myElement) {
    while (myElement.firstChild) {
        myElement.removeChild(myElement.lastChild);
    }
}

// Battlepage variable declaration
var header = document.getElementById("header")
var userPokemon = document.getElementById("userPokemon");
var cpuPokemon = document.getElementById("cpuPokemon");
var battleViewport = document.getElementById("battleViewport");
var userAttacks = document.getElementById("userAttacks");
var cpuAttacks = document.getElementById("cpuAttacks")

// Battle sequence logic

pokemonBattle();

function pokemonBattle() {
    clearElement(userPokemon);
    clearElement(cpuPokemon);
}

var chosenPokemon = PokemonSelect();

var value = Cookies.get("battle");
console.log(value);
var battle = JSON.parse(value);

function characterSelect(catchEmAll){
    var catchRow = document.createElement('div');
    catchRow.classList.add('grid');
    
    var pokemonImg = document.createElement('img');
    pokemonImg.setAttribute('src', player.imgLink);
    catchRow.append(pokemonImg);

    var name = document.createElement('h3');
    name.innerText = player.name;
    catchRow.append(name);

    var attack1 = document.createElement('button')
    attack1.innerHTML=attack.type;
    catchRow.append(attack1);

    var attack2 = document.createElement('button')
    attack1.innerHTML=attack.type;
    catchRow.append(attack2);

    var attack3 = document.createElement('button')
    attack1.innerHTML=attack.type;
    catchRow.append(attack3);
    
    for (let i = 0; i < battle.length; i++) {
        characterSelect(battle[i]);
        
    }
}
