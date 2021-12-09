let menuIcon = document.querySelector('.menu .fa-bars');
let nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle("fa-times");
    nav.classList.toggle('active')
})