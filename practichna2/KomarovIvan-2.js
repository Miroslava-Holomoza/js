let day = prompt("Введіть день тижня").toLowerCase();
let result;
switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        result = "Вартість квитка складає 150 грн";
        break;

    case "четвер":
    case "п’ятниця":
    case "п'ятниця":
        result = "Вартість квитка складає 200 грн";
        break;

    case "субота":
    case "неділя":
        result = "Вартість квитка складає 250 грн";
        break;

    default:
        result = "Помилка введення дня тижня";
}
console.log(result);
alert(result);