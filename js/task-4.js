// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

const counterEl = document.querySelector('#value');

let counterValue = Number(counterEl.textContent);

const btnIncrementEl = document.querySelector(
  '#counter button[data-action="increment"]',
);

const btnDecrementEl = document.querySelector(
  '#counter button[data-action="decrement"]',
);

function increment() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}

btnIncrementEl.addEventListener('click', increment);
btnDecrementEl.addEventListener('click', decrement);
