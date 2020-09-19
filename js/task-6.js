// Напиши скрипт, который бы при потере фокуса на инпуте, проверял
// его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.
// Если введено подходящее количество, то border инпута становится
// зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const inputEl = document.querySelector('#validation-input');
const validLength = +inputEl.dataset.length;

inputEl.onblur = borderColorChange;

function borderColorChange(event) {
  const ref = event.currentTarget;
  ref.classList.remove(...ref.classList);
  ref.value.length === validLength
    ? ref.classList.add('valid')
    : ref.classList.add('invalid');
}
