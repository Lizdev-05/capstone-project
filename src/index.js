import './style.css';
import display from './display.js';
import Meal from './modules/meal-Class.js';

import './assets/images/meal1.jpg';
import './assets/images/meal2.jpg';
import './assets/images/meal3.jpg';
import './assets/images/meal4.jpg';
import './assets/images/close.svg';

display();
const niceMeal = new Meal();
niceMeal.getMeal();
