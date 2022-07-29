const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
const mealData = document.querySelector('.meal-cards');

const displayMeal = (data) => {
  const meal = document.createElement('div');
  meal.classList.add('card');
  meal.innerHTML = `
  <div class="card-image">
          <img src="${data.strMealThumb}"/>
          </div>
          <div class="card-content">
           <div class="first-part">
            <h2>${data.strMeal}</h2>
            <div class='like-part likes-${data.idMeal}'>
            <i class="fa-solid fa-heart like-icon" id='${data.idMeal}'></i> 
            <span class='like-count ${data.idMeal}>' id='${data.idMeal}'>0 likes</span>
            </div>
           </div>
            <div class="second-part">
            <button class="sea-meal">Comment</button>
            <button>Reservation</button>
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

export default display;