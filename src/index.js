import './style.css';
import display from './display.js';

import './assets/images/meal1.jpg';
import './assets/images/meal2.jpg';
import './assets/images/meal3.jpg';
import './assets/images/meal4.jpg';

display();

// function  getmeals() {
//   fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tLLmHQIVXj0SbcfXAHdh/scores`)
//   .then(response => response.json())
//   .then(result => {
//     console.log(result);
//   })
// }

// getmeals()
const meals = [];

const getmeals = () => {
  for(let i = 0; i < 10; i += 1){
  const newmeal = { name: 'mymeal', closeButton: './src/images/modal-close-button.svg', Ingredient: 'saffffffffffffffffffffffffffffh', preparation: 'dgsgdfggfggdd' };
meals.push(newmeal)  
}
}
getmeals();

const displaymeal = (meal) => {
  let mealContainer = '';
  meal.forEach((arrayItem, index) => {    
    const mealContent = `    
      <div class="description">${arrayItem.name}</div>
      <button id="${index}" class="see-meals">Comments</button>     
       `;
    mealContainer += mealContent;
  });
  document.getElementById('all-meals').innerHTML = mealContainer;
};

displaymeal(meals);

// display comment popup on button click
const seeMeals = document.querySelectorAll('.see-meals');
seeMeals.forEach((item) => {
  item.addEventListener('click', () => {
    const modalContainer = document.createElement('section');
    modalContainer.className = 'modal-container';
    modalContainer.id = 'modal-container-id';
    modalContainer.innerHTML = `
    <div><img class="close" src="${meals[item.id].closeButton}" alt="close-button"></div>
 <h2 class="mobile-modal-title">${meals[item.id].name}</h2>     
 `;
    document.getElementById('meals-popup').appendChild(modalContainer);
  });
});

