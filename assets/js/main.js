"use strict";

//Задание 1
let admin = 'Джон';
let name = 'Джон';
alert(admin)

//Задание 2 
let name1 = prompt('Напишите название города');
let year = +prompt('Напишите год основания города');
let population = prompt('Напишите население города');
year = 2024 - year;
alert(`Городу ${name1} исполнилось ${year} лет с момента его образования. Население - ${population} человек`);

//Задание 3 
let number = prompt('Введите радиус');
let s = Math.PI * (number**2);
alert(s);

//Задание 4
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert("Сумма: " + sum + "\n" +
      "Разность: " + difference + "\n" +
      "Произведение: " + product + "\n" +
      "Частное: " + quotient);