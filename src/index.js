import './style.css';
import display from './display.js';
import likes from './likeCounter.js';
import Meal from './modules/meal-Class.js';
import menuCounter from './itemCounter.js';

import './assets/images/meal1.jpg';
import './assets/images/meal2.jpg';
import './assets/images/meal3.jpg';
import './assets/images/meal4.jpg';
import './assets/images/close.svg';

display();
likes();
const niceMeal = new Meal();
niceMeal.getMeal();
menuCounter();
