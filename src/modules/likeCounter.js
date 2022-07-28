const URL_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cZrT4b0n4BnZGphjyULr/likes';
const mealContainer = document.querySelector('.meal-cards');

const likes = () => {
  mealContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.like-icon');
    if (!clicked) return;
    const item = clicked.getAttribute('id');
    fetch(URL_API, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        item_id: item,
      }),
    });
    fetch(URL_API).then((response) => response.json()).then((data) => {
      const likeCount = document.querySelector(`.likes-${item}`);
      likeCount.querySelector('span').textContent = `${data.filter((items) => items.item_id === item)[0].likes} likes`;
    });
  });
};

const displayLikes = () => {
  fetch(URL_API).then((response) => response.json()).then((data) => {
    data.forEach((item) => {
      const likeCount = document.querySelector(`.likes-${item.item_id}`);
      likeCount.querySelector('span').textContent = `${item.likes} likes`;
    });
  }).catch((error) => error);
};
export { likes, displayLikes };