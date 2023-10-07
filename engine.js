const { Hero } = require('./class/hero');
const json = require('./type.json')

let states = {
    enemy: null,
    hero: null,
    player: true,
}

function verifyCharacters() {
    if (states.enemy.life === 0) {
        console.log("INIMIGO PERDEU")
    } else if (states.hero.life === 0) {
        console.log("VOCÊ PERDEU")
    } else {
        console.log("VIDA DO INIMIGO: "+ states.enemy.life)
        console.log("HEROI: "+ states.hero.life)
        player()
    }
}

function player() {
    if (states.player) {
        value = selectOption(states.hero, numberRandom(3))
        states.enemy.lifeCharacter(value)
        states.player = false
    } else {
        value = selectOption(states.enemy, numberRandom(3))
        states.hero.lifeCharacter(value)
        states.player = true
    }

    verifyCharacters()
}

function msgAttack(character, option) {
    character
    if (option === true) {
        option = "CURED".toUpperCase()
    }
    if(character.type['item'] !== null) {
        item = character.type['item']
    } else {
        item = "Não usou item"
    }

    console.log(`
    ATTACK ${character.name}
########################## 
    TYPE: ${character.type['name']}
    ATTACK: ${option}
    ITEM: ${item}
########################## 
        `.toUpperCase())
}

function selectOption(character, value) {
    if (value === 0) {
        option = character.attack()
    } else if (value === 1) {
        option = character.power()
    } else if (value === 2) {
        option = character.cure()
        if (option) {
            console.log("CURA")
        }
    }

    msgAttack(character, option)
    return option
}

function numberRandom(max) {
    const number = Math.floor(Math.random() * max)
    return number
}

function createEnemy() {
    number = numberRandom(4)
    states.enemy = new Hero('Enemy', null, json.type[number])
}

function main() {
    createEnemy()
    states.hero = new Hero('Lucas', 22, json.type[2])
    player()
}

main()