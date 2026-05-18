let score = Number(prompt("Введіть кількість балів"));
let homeworkDone = prompt("Чи виконані всі домашні завдання? true/false") === "true";
let finalTestPassed = prompt("Чи пройдено фінальний тест? true/false") === "true";

let result;

if (score >= 70 && homeworkDone && finalTestPassed) {
    result = "Сертифікат успішно отримано";
} else {
    result = "Умови для отримання сертифіката не виконані";
}
console.log(result);
alert(result);