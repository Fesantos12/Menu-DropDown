const more = document.querySelector('.more');
const arrow = document.querySelector('.bx');
const ulContent = document.querySelector('.ul-content');
const container = document.querySelector('.main-container');

more.addEventListener('click', () => {
  ulContent.classList.toggle('active');
  arrow.classList.toggle('arrow-active');
});

container.addEventListener('click', () => {
  ulContent.classList.remove('active');
  arrow.classList.remove('arrow-active');
});
