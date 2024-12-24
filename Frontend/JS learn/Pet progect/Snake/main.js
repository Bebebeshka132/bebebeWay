let nav = document.querySelector('.nav__list')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('open')
})