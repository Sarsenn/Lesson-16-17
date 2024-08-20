'use strict';

let name = prompt('Whats your name?');
let age = +prompt('How old are you?');

alert(name);
alert(age);

let num1 = +prompt('Give me number');
let num2 = +prompt('Give me anthoner number');

console.log(num1 ** num2);


confirm('Would you like to receive a notification');

let age1 = +prompt('How old are you?');
console.log(Boolean(age1)); 

 let num3 = +prompt('Give me number');
alert(Math.pow(num3, num3))

let string = prompt('Give me word!');
let string2 = prompt('Give me anthoner word!');

alert(string + string2);

let num4 = +prompt('Give me number');
let num5 = +prompt('Give me number 2');
let num6 = +prompt('Give me number 3');

alert( (num4 + num5 + num6) / 3 )

let hours = +prompt('Give me hours');
let minute = +prompt('Give me minute');
let seconds = +prompt('Give me seconds');

alert((hours * 3600) + (minute * 60) + seconds)


let celsia = parseInt(prompt('Сколько градусов на улице?'));
alert(`Температура в градусах Фаренгейта: ${(celsia * 9/5 + 32)}`);
alert(`Температура в градусах Кельвина:${celsia + 273.15}`);

let radius = +prompt('What is the radius of a circle');
alert((Math.pow(radius,2)) * 3.14)
