let isAuthorized = prompt("Чи авторизований користувач? true/false") === "true";
let internetSpeed = Number(prompt("Введіть швидкість інтернету"));
let isBanned = prompt("Чи заблокований акаунт? true/false") === "true";

let result;

if (isAuthorized && internetSpeed >= 20 && !isBanned) {
    result = "Доступ до онлайн-режиму дозволено";
} else {
    result = "Доступ до онлайн-режиму заборонено";
}

console.log(result);
alert(result);