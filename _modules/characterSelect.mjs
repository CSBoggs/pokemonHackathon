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

    constructor(name, sprite, hp, moves){
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.fullhp = hp;
        this.moves = moves;
    }


// var pkmList = {
//     ['Squirtle', '\Projects\Pokemon\images\Squirtle.png',314]
//     ['Charmander', '\Projects\Pokemon\images\Charmander.png',309]
//     ['Bulbasaur', '\Projects\Pokemon\images\Bulbasaur.png',318]
// }

var typeMatch = {
    ['Squirtle': ('water', 'eletric')]
    ['Charmander':('fire')
    ['Bulbasaur': ('Grass', 'poison')
}

function spaw (bool) {
var p =pkmList[Math.floor(Math.random()*pkmList.length)];
var pkm = new Pokemon(p[0], p[1], p[2]);
 if(bool){
for (i=0; i<pkmList.length; i++){
document.getElementById().value= pkm.moves[i][0];
} 
return pkm;



function attack(move, attacker, receiver, hp, owner){
    document.getElementById('comment').innerHTML = '<p>' + owner + attacker.name + ' used '  + move[0] + '!</p>';
    if(Math.random() < move[3]){
        let power = move[2] += Math.floor(Math.random()*10);
        let rtype = typeMatch[receiver.name];
        let mtype = move[1];
        let scale = 1;

     for (i=0; rtype.length; i++){
        if (rtype[i].includes(mtype)){
          switch[i]
             setTimeOut(function(){
                 docutment.getElementById().innerText=
}
