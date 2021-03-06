let bundeslandInfo = document.getElementById('bundeslandInfo')
let bundeslandInfoErgebnis = document.getElementById('bundeslandInfoErgebnis')

let check = () => {
    switch (bundeslandInfo.value) {
        case 'Baden-Württemberg':
            bundeslandInfoErgebnis.innerHTML = '<p>Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt</p>';
            break;
        case 'Bayern':
            bundeslandInfoErgebnis.innerHTML = '<p>Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt</p>'
    }
}