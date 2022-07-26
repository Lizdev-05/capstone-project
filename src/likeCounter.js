// const URL_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cZrT4b0n4BnZGphjyULr/likes';
const mealContainer = document.querySelector('.meal-cards');

const likes = () => {
  console.log(likes);
  mealContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.like-icon');
    console.log(clicked);
    if (!clicked) return;
    const item = clicked.getAttribute('id');
    console.log(item);
  });
};

export default likes;