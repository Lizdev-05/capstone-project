/**
 * @jest-environment jsdom
 */

const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
const itemCounter = document.querySelector('.item-counter');

const menuCounter = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals;
      const count = meal.length;
      itemCounter.innerHTML = `(${count})`;
    });
};
export default menuCounter;
menuCounter();
