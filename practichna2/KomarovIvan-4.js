let genre = prompt("Введіть музичний жанр").toLowerCase();
let result;

switch (genre) {
    case "rock":
        result = "Увімкнено рок-плейлист";
        break;

    case "pop":
        result = "Увімкнено поп-плейлист";
        break;

    case "jazz":
        result = "Увімкнено джаз-плейлист";
        break;

    case "classical":
        result = "Увімкнено класичну музику";
        break;

    default:
        result = "Жанр не знайдено";
}
console.log(result);
alert(result);