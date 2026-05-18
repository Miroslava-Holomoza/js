let temperature = Number(prompt("Введіть температуру в кімнаті"));
let sensorError = prompt("Чи є помилка датчика? true/false") === "true";

let result;

if (sensorError) {
    result = "Помилка датчика температури";
} else if (temperature < 18) {
    result = "Увімкнути обігрів";
} else if (temperature >= 18 && temperature <= 25) {
    result = "Температура комфортна";
} else {
    result = "Увімкнути кондиціонер";
}

console.log(result);
alert(result);