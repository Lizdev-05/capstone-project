const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
const mealData = document.querySelector('.meal-cards');

const displayMeal = (data) => {
  const meal = document.createElement('div');
  meal.classList.add('card');
  meal.innerHTML = `
  <div class="card-image">
          <img src="${data.strMealThumb}" />
          </div>
          <div class="card-content">
           <div class="first-part">
            <h2>${data.strMeal}</h2>
            <span><i class="fa-solid fa-heart"></i>${data.idMeal} likes</span>
           </div>
            <div class="second-part">
              <p>Comment</p>
              <p>Reservation</p>
            </div>
          </div>
  `;
  mealData.appendChild(meal);
};

const display = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  data.meals.forEach((food) => {
    displayMeal(food);
  });
};

display();
export default display;