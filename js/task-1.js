// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

// Для каждого элемента li.item в списке ul#categories, найдет и
// выведет в консоль текст заголовка элемента(тега h2) и количество
// элементов в категории(всех вложенных в него элементов li).

const categoriesList = document.querySelector("#categories");
console.log(`В списке ${categoriesList.children.length} категории`);

const categoriesListItemArray = [...categoriesList.children];

categoriesListItemArray.forEach((element) => {
  console.log(
    `Категория: ${
      element.querySelector("h2").textContent
    }\nКоличество элементов: ${element.querySelectorAll("li").length}`
  );
});
