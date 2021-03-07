let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

getraenke = getraenke.sort()

let myDrinks = (elt) => {
    console.log(elt)
    document.write(elt + '<br>')
}

getraenke.forEach(myDrinks)