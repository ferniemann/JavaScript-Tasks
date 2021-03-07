let string_reverse = (str) => {
    if (str.includes(" ")) {
        let strArray = str.split(" ")
            // console.log(strArray)
        console.log(strArray.forEach(','))
    } else {
        console.log(str.split("").reverse().join(""))
    }
}

string_reverse('Sergio');
string_reverse('Hannah');
string_reverse('Regallager');
string_reverse('Reliefpfeiler');
string_reverse('Rentner');
string_reverse('Ella mag alle Bohnen');
string_reverse('han nesaH has ennaH');
string_reverse('Nie solo sein');