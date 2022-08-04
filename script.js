"use strict";
let magicalNumber = 15;
let attempt = 10;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function (magicalNumber, attempt) {
  const ask = function () {
    let number = prompt("Введите число");
    if (isNumber(number) && number != null) {
      return number;
    } else {
      ask();
    }
  };

  const isWin = function (number) {
    if (attempt == 0) {
      let answer = confirm("Попытки закончились!!!, Хотели бы вы еще сыграть?");
      if (answer == true) {
        game(magicalNumber, 10);
      }
    } else {
      if (number == magicalNumber) {
        let answer = confirm(
          "Поздравляю, Вы угадали!!!, Хотели бы вы еще сыграть?"
        );
        if (answer == true) {
          game(magicalNumber, 10);
        }
      } else if (number > magicalNumber) {
        attempt--;
        alert("Загаданное число меньше, У вас осталось попыток " + attempt);
        isWin(ask());
      } else if (number < magicalNumber) {
        attempt--;
        alert("Загаданное число больше, У вас осталось попыток " + attempt);
        isWin(ask());
      }
    }
  };

  isWin(ask());
};

game(magicalNumber, attempt);
