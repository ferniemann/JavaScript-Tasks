const vorname = document.getElementById('vorname');
const nachname = document.getElementById('nachname');
const land = document.getElementById('land');

let showForm = () => {
    const fullName = vorname.value + ' ' + nachname.value;
    console.log('Full Name: ' + fullName + ', Land: ' + land.value);
}