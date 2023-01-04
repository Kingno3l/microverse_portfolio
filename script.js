const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlink');
// const span = document.getElementsByClassName('bar')[2];

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});

document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('show');
}));