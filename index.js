let age = 17; 
console.log(age);

let name = "Anton"; 
console.log(name);

let isStudent = false; 
console.log(isStudent);

let myString = "Знай, що з першого разу нічого не виходить. Завзято тренуйся, і все вийде."; 
console.log(myString);

let myNumber = 11; 
myNumber += 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);


let userName = prompt("Введіть ваше ім'я:");
alert(`Привіт, ${userName}!`);


let isConfirmed = confirm("Ви впевнені, що хочете підтвердити дію?");
if (isConfirmed) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}


alert("Увага! Ця дія є небезпечною.");
let dangerConfirmed = confirm("Ви впевнені, що хочете продовжити?");
if (dangerConfirmed) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}