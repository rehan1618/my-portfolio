import data from './data.json' assert { type: 'json' };

const workSection = document.querySelector('.work-card-container');
const heroBtn = document.querySelector('.btn-hero');
const leftArrow = document.querySelector('.fa-circle-left');
const rightArrow = document.querySelector('.fa-circle-right');
const burgerMenu = document.getElementById('burger-menu');
const navbarItems = document.querySelector('.nav-items');

let count = 0;

const increase = (count) => {
  if (window.innerWidth >= 465) {
    if (count > -80) {
      count -= 40;
      cards.forEach((card) => {
        card.style.transform = `translateX(${count}rem)`;
      });
    }
  } else {
    if (count > -66) {
      count -= 33;
      cards.forEach((card) => {
        card.style.transform = `translateX(${count}rem)`;
      });
    }
  }
  return count;
};

const decrease = (count) => {
  if (window.innerWidth >= 465) {
    if (count < 0) {
      count += 40;
      cards.forEach((card) => {
        card.style.transform = `translateX(${count}rem)`;
      });
    }
  } else {
    if (count < 0) {
      count += 33;
      cards.forEach((card) => {
        card.style.transform = `translateX(${count}rem)`;
      });
    }
  }
  return count;
};

const createElement = (tag, tagClass = '', tagText = '') => {
  const element = document.createElement(tag);
  if (tagClass.length !== 0) {
    element.className = tagClass;
  }
  if (tagText !== 0) {
    element.innerText = tagText;
  }

  return element;
};

function appendElements(parent, child) {
  parent.appendChild(child);
}

const createCard = (
  img = 'images/projects/sneakers-img.png',
  title,
  desc,
  link
) => {
  const cardDiv = createElement('div', 'card');

  const imageContainer = createElement('div', 'work-img-container');

  const imageTag = createElement('img', 'work-img');
  imageTag.setAttribute('src', img);
  imageTag.setAttribute('alt', 'project image');

  const infoMainContainer = createElement('div', 'project-main-container');

  const infoContainer = createElement('div', 'project-info-container');

  const projectTitle = createElement('h3', 'project-title', title);

  const projectSummary = createElement('p', 'project-summary', desc);

  const button = createElement(
    'a',
    'btn-project btn btn-shadow',
    'Take a Look'
  );
  button.setAttribute('href', link);
  button.setAttribute('target', '_blank');

  appendElements(imageContainer, imageTag);
  appendElements(infoContainer, projectTitle);
  appendElements(infoContainer, projectSummary);
  appendElements(infoMainContainer, infoContainer);
  appendElements(infoMainContainer, button);
  appendElements(cardDiv, imageContainer);
  appendElements(cardDiv, infoMainContainer);

  return cardDiv;
};

if (window.innerWidth <= 830 && heroBtn.classList.contains('btn-transform')) {
  heroBtn.classList.remove('btn-transform');
} else if (
  window.innerWidth > 830 &&
  !heroBtn.classList.contains('btn-transform')
) {
  heroBtn.classList.add('btn-transform');
}

data.forEach(({ title, desc, img, link }) => {
  workSection.append(createCard(img, title, desc, link));
});

const cards = document.querySelectorAll('.card');

rightArrow.addEventListener('click', () => (count = increase(count)));
leftArrow.addEventListener('click', () => (count = decrease(count)));

burgerMenu.addEventListener('click', () => {
  navbarItems.classList.toggle('menu-visible');
});
