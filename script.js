const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlink');
const span = document.getElementsByClassName('bar')[2];


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});



span.addEventListener('click', function onClick() {
    console.log(222);
    // span.classList.toggle('style="background-color:white;');
    //span.style.backgroundColor = 'white';
    //span.style.color = 'white';
})

document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('show');
}));