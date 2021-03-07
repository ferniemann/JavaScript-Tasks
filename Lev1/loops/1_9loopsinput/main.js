let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
let number = document.getElementById('number')
let print = document.getElementById('print')

printWord = () => {
    for (let i = 0; i < words.length; i++) {
        if (number.value == words[i].length) {
            print.innerHTML += `${words[i]}<br>`
        }
    }
}