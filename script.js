const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerClose = document.querySelector('.burger-menu-close');


burgerBtn.onclick = () => {
    burgerMenu.classList.add('active');
}

burgerClose.onclick = () => {
    burgerMenu.classList.remove('active');
}