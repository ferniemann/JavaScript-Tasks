let thename = 'Batman'
let power = 'money'
let enemy = 'Joker'

let hero = (heroName, heroPower, heroEnemy) => {
    document.body.innerHTML = 'Mein Held ist ' + heroName + '. Seine Superkraft ist ' + heroPower + ' und sein Gegner ' + heroEnemy;
}

hero(thename, power, enemy)