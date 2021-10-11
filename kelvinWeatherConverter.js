const kelvin =  0;
// constant variable kelvin

const celsius = kelvin - 273;
// constant variable celsius


let fahrenheit = celsius * (9/5) + 32;
// convert to fahrenheit

fahrenheit = Math.floor(fahrenheit);
// round down the fahrenheit temp

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)



let newton = celsius * (33/100);
// convert to newton

newton = Math.floor(newton);
// round down the newton temp

console.log(`The same temperature is ${newton} degrees Newton`);
