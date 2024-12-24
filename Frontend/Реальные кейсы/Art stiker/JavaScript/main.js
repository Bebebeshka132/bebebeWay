const burger = document.querySelector('.burger');
const navList = document.querySelector('.header__navigashion');

burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
});

// let worksSlider = document.querySelector('.main__ourWors-slider')

const worksSlider = new Swiper('.main__ourWorks-swiper', {
    
    breakpoints: {
        1250: {
            slidesPerView: 2,
            spaceBetween: 45,
        },
    },
    
    navigation: {
        nextEl: '.main__ourWorks-next',
        prevEl: '.main__ourWorks-prev',
    },

    pagination: {
        el: '.main__ourWorks-pag',
        type: 'fraction',
    },
})