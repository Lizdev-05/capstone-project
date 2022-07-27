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
        modalContainer.id = `${index}`;
        modalContainer.className = 'modal-container';
        modalContainer.innerHTML = `
      <div><img class="close" src="./assets/images/close.svg" alt="close-button"></div> 
       <div class="card-image">
       <img src="${data.meals[index].strMealThumb}">
       </div>
       <div class="card-content">
        <div class="first-part">
         <h2>${data.meals[index].strMeal}</h2>      
         <span>Order Number: ${data.meals[index].idMeal}</span>
         </div>       
        </div>
        <h2>Comment(count)</h2>
        <div id="comment${index}"></div
        <h2>Add a comment</h2>
        <form>        
        <input type="text" id="name${index}" placeholder="Your name"><br>
        <textarea name="text-area" id="text${index}" class="text-area" placeholder="Your insights" rows="5" maxlength="500" required></textarea><br>
        </form>
        <button class="comment-btn" type="button">Comment</button>
       `;
        this.mealContainer.appendChild(modalContainer);
        const comment = document.querySelectorAll('.comment-btn');
        this.addCommentOnPopup(comment, index);
        this.closeMeal(modalContainer);
      });
    });
  }

  addCommentOnPopup = (comment, index) => {
    comment.forEach((item) => {
      item.addEventListener('click', () => {
        const commentId = document.getElementById(`comment${index}`);
        const nameValue = document.getElementById(`name${index}`).value;
        const commentValue = document.getElementById(`text${index}`).value;
        const arrayData = [];
        if (nameValue === '' || commentValue === '') return;

        const commentData = {
          item_id: arrayData.length,
          username: nameValue,
          comment: commentValue,
        };
        const commentString = JSON.stringify(commentData);
        const data = JSON.parse(commentString);
        arrayData.push(data);
        this.displayComment(arrayData, commentId);
      });
    });
  }

  displayComment = (arrayData, commentId) => {
    arrayData.forEach((item) => {
      const commentdiv = document.createElement('div');
      commentdiv.innerHTML = `
       <div>${item.username}: ${item.comment}</div>     
    `;
      commentId.appendChild(commentdiv);
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
    const comments = await response.text().catch((error) => new Error(error));
    // this.displayComments(comments);
    return comments;
  }
}
