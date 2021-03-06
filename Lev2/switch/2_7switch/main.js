let myList = document.getElementById('mylist')
let masse = document.getElementById('masse')

showtxt = () => {
    switch (myList.value) {
        case '0':
            masse.innerHTML = '<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm'
            break;
        case '1':
            masse.innerHTML = 'Test'
    }
}