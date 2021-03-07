let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let convert = (f) => (((f - 32) / 1.8).toFixed(0))

let celcius = fahrenheit.map(convert)

console.log(celcius)