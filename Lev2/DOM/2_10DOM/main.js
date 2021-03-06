const element = document.getElementById('element');

let changeSmall = () => (element.classList.remove('medium', 'big'), element.classList.add('small'));
let changeMedium = () => (element.classList.remove('small', 'big'), element.classList.add('medium'));
let changeBig = () => (element.classList.remove('small', 'medium'), element.classList.add('big'));