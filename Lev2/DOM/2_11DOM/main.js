let randomBackground = () => {
    let random = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
    document.body.style.backgroundColor = random
    console.log(random);
    let rgb = document.getElementById('rgb')
    rgb.innerHTML = random
    rgb.style.display = 'flex'
}