var Currenthealth = 100;
var usermaxHealth = 100;


var pokemonList = document.querySelectorAll('pokemon-profile');
// console.log(pokemonList);
//     pokemonList.addEventListener("click", function playerSelect(){
//         var characterSelect = pokemonList.Pokemon;
//     }
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
}
console.log(characterSelect);
    
    


// var Pokemon {
//     construtor(name, sprite, hp, moves){
//         this.name = name;
//         this.sprite = sprite;
//         this.hp = hp;
//         this.fullhp = hp;
//         this.moves = moves;
//     }
// }

var pkmList = [
    ['Squirtle', '\Projects\Pokemon\images\Squirtle.png',314]
    ['Charmander', '\Projects\Pokemon\images\Charmander.png',309]
    ['Bulbasaur', '\Projects\Pokemon\images\Bulbasaur.png',318]
]

var typeMatch = {
    'Squirtle': ['water', 'eletric']
    
}