// Напиши скрипт, который бы при потере фокуса на инпуте, проверял
// его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.
// Если введено подходящее количество, то border инпута становится
// зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const inputEl = document.querySelector('#validation-input');
const validLength = +inputEl.dataset.length;
console.log(validLength);

inputEl.addEventListener('change', borderColorChange);

function borderColorChange() {
  inputEl.classList.remove(...inputEl.classList);
  inputEl.value.length >= validLength
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}
