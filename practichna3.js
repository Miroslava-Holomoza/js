// Завдання 1.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// Завдання 2.
let n2 = Number(prompt("Завдання 2. Введіть число N:"));
let result2 = "";

for (let i = 1; i <= n2; i++) {
    if (i % 2 === 0) {
        result2 += i + "\n";
    }
}

alert("Завдання 2:\n" + result2);


// Завдання 3.
let n3 = Number(prompt("Завдання 3. Введіть число N:"));
let sum = 0;

for (let i = 1; i <= n3; i++) {
    sum += i;
}

alert("Завдання 3:\nСума чисел = " + sum);


// Завдання 4.
let n4 = Number(prompt("Завдання 4. Введіть число N:"));
let result4 = "";

for (let i = n4; i >= 1; i--) {
    result4 += i + "\n";
}

alert("Завдання 4:\n" + result4);


// Завдання 5.
let n5 = Number(prompt("Завдання 5. Введіть число для таблиці множення:"));
let result5 = "";

for (let i = 1; i <= 10; i++) {
    result5 += n5 + " x " + i + " = " + (n5 * i) + "\n";
}

alert("Завдання 5:\n" + result5);


// Завдання 6.
let correctPassword = "admin123";
let password6;

do {
    password6 = prompt("Завдання 6. Введіть пароль:");

    if (password6 !== correctPassword) {
        alert("Неправильний пароль");
    }
} while (password6 !== correctPassword);

alert("Пароль правильний");


// Завдання 7.
let password7;
let access = false;

for (let tries = 1; tries <= 3; tries++) {
    password7 = prompt("Завдання 7. Введіть пароль. Спроба " + tries + " з 3:");

    if (password7 === correctPassword) {
        access = true;
        break;
    } else {
        alert("Неправильний пароль");
    }
}

if (access) {
    alert("Доступ дозволено");
} else {
    alert("Доступ заблоковано");
}


// Завдання 8.
let result8 = "";

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }

    result8 += i + "\n";
}

alert("Завдання 8:\n" + result8);


// Завдання 9.
let n9 = prompt("Завдання 9. Введіть число:");
let digitsCount = n9.length;

alert("Завдання 9:\nКількість цифр = " + digitsCount);


// Завдання 10.
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;

do {
    guess = Number(prompt("Завдання 10. Вгадайте число від 1 до 100:"));

    if (guess < secretNumber) {
        alert("Більше");
    } else if (guess > secretNumber) {
        alert("Менше");
    } else {
        alert("Ви вгадали");
    }
} while (guess !== secretNumber);