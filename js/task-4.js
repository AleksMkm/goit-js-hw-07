// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

const counter = document.querySelector("#value");

let counterValue = Number(counter.textContent);

const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]'
);

const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);

function increment() {
  counterValue += 1;
  counter.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
