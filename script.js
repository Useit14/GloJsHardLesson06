"use strict";
let magicalNumber = Math.round(Math.random() * 100);
let attempt = 10;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function (magicalNumber, attempt) {
  const ask = function () {
    let number = prompt("Введите число", "25");
    if (number == null) {
      return null;
    } else if (isNumber(number)) {
      return number;
    } else {
      return ask();
    }
  };

  const gameOver = function () {
    alert("Игра окончена");
  };

  const getRandomNumber = function () {
    return Math.round(Math.random() * 100);
  };

  const isWin = function (number) {
    if (attempt == 1) {
      let answer = confirm("Попытки закончились!!!, Хотели бы вы еще сыграть?");
      if (answer == true) {
        game(getRandomNumber(), 10);
      }
    } else {
      if (number == magicalNumber) {
        let answer = confirm(
          "Поздравляю, Вы угадали!!!, Хотели бы вы еще сыграть?"
        );
        if (answer == true) {
          game(getRandomNumber(), 10);
        }
      } else if (number > magicalNumber) {
        attempt--;
        alert("Загаданное число меньше, У вас осталось попыток " + attempt);
        let number = ask();
        if (number == null) {
          gameOver();
        } else {
          isWin(number);
        }
      } else if (number < magicalNumber) {
        attempt--;
        alert("Загаданное число больше, У вас осталось попыток " + attempt);
        let number = ask();
        if (number == null) {
          gameOver();
        } else {
          isWin(number);
        }
      }
    }
  };

  let number = ask();
  if (number == null) {
    gameOver();
  } else {
    isWin(number);
  }
};

game(magicalNumber, attempt);
