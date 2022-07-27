export default class Meal {
  // Initialization
  constructor() {
    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
    this.INV_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/n9t5YbrpQrNNAecac7tn/comments';
    this.mealContainer = document.getElementById('meals-popup');
  }

  // Get meals from Api, throw error if promise was not resoved
  //  otherwise popup meal if comment button is clicked

 getMeal = async () => {
   const response = await fetch(this.API_URL);
   const data = await response.json().catch((error) => new Error(error));
   this.popupMeal(data);
 };

  //  Function that display meal when comment button is cloked
  popupMeal = (data) => {
    const seeMeals = document.querySelectorAll('.sea-meal');
    seeMeals.forEach((item, index) => {
      item.addEventListener('click', () => {
        const modalContainer = document.createElement('section');
        modalContainer.className = 'modal-container';
        modalContainer.innerHTML = `
      <div><img class="close" src="./assets/images/close.svg" alt="close-button"></div> 
       <div class="card-image">
       <img src="${data.meals[index].strMealThumb}"/>
       </div>
       <div class="card-content">
        <div class="first-part">
         <h2>${data.meals[index].strMeal}</h2>      
         <span>Order Number: ${data.meals[index].idMeal}</span>
         </div>       
        </div>
        <div id=${index}></div>
       `;
        this.mealContainer.appendChild(modalContainer);
        this.closeMeal(modalContainer);
      });
    });
  }

  // close popup when the close button is cliked
  closeMeal = (modalContainer) => {
    const closeBtn = document.querySelectorAll('.close');
    closeBtn.forEach((el) => {
      el.addEventListener('click', () => {
        modalContainer.classList.add('hide');
      });
    });
  }
  // Add Comments
  addComment = async (data) => {
    const response = await fetch(this.INV_API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),                  
    });     
    return response;     
  }
//  Get comments
  getComment = async () => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/n9t5YbrpQrNNAecac7tn/comments?item_id=item1');
    const comments  = await response.text().catch((error) => new Error(error));
    console.log(comments); 
    this.displayComments(comments);   
  }

  //  display comment
   displayComments(data) {
    let commentContainer = '';
    data.forEach((item) => {
      const commentContent = `
    <div>${item.creation_date} ${item.username}: ${item.comment}</div>       
    `;
    commentContainer += commentContent;
    });
    document.getElementById('comment').innerHTML = bookContainer;
  }
}
