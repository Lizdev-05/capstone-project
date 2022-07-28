import './style.css';
import display from './modules/display.js';
import { likes, displayLikes } from './modules/likeCounter.js';
import Meal from './modules/meal-Class.js';
import menuCounter from './modules/itemCounter.js';

import './assets/images/meal1.jpg';
import './assets/images/meal2.jpg';
import './assets/images/meal3.jpg';
import './assets/images/meal4.jpg';
import './assets/images/meal5.jpg';
import './assets/images/close.svg';

display();
likes();
const niceMeal = new Meal();
niceMeal.getMeal();
niceMeal.getComment();
menuCounter();
displayLikes();
