// selectors
const navListItems = document.querySelectorAll('li');
const feedBack = document.querySelector('#feedback');
const navBar = document.querySelector('.header__title');
const contacts = document.querySelector('.header__contacts');

const modalWindow = document.querySelector('.modal');
const freeConsultBtn = document.querySelector('.navigation__btn');
const freeConsultTitleBtn = document.querySelector('.title__header_btn');
const modalWindowOpenBtn = document.querySelector('.feedback__open');
const modalWindowCloseBtn = document.querySelector('.modal__close-btn');

for (let i = 0; i < navListItems.length; i++) {
  const section = document.querySelector(`#section_${i}`);
  navListItems[i].addEventListener('click', function (e) {
    section.scrollIntoView({ behavior: 'smooth' });
  });
}

freeConsultBtn.addEventListener('click', function () {
  feedBack.scrollIntoView({ behavior: 'smooth' });
});
freeConsultTitleBtn.addEventListener('click', function () {
  feedBack.scrollIntoView({ behavior: 'smooth' });
});

modalWindowOpenBtn.addEventListener('click', function () {
  modalWindow.classList.toggle('close');
});
modalWindowCloseBtn.addEventListener('click', function () {
  modalWindow.classList.add('close');
});

document.addEventListener('scroll', function () {
  const position = window.visualViewport.pageTop;
  if (position > 186) {
    contacts.style.marginBottom = '13rem';
    navBar.classList.add('active');
    navBar.addEventListener('mouseover', function () {
      navBar.classList.add('inactive');
    });
    navBar.addEventListener('mouseout', function () {
      navBar.classList.remove('inactive');
    });
  }
  if (position < 780) {
    contacts.style.marginBottom = '0';
    navBar.classList.remove('active');
  }
  //   console.log(position);
});
