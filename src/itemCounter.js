const menu = document.querySelector('.menu');
const items = document.querySelectorAll('.card');

const itemCounter = () => {
  let counter = 0;
  items.forEach(() => {
    counter += 1;
  });
  menu.innerHTML = `${counter} items`;
};

itemCounter();

export default itemCounter;