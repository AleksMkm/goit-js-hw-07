// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой, в спане должна отображаться
// строка 'незнакомец'.

const input = document.querySelector("#name-input");
console.log(input);

const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener("input", updateValue);

function updateValue() {
  output.textContent = input.value === "" ? "незнакомец" : input.value;
}
