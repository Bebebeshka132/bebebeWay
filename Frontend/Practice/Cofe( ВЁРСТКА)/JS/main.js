let width = window.innerWidth
if(width >= 620) {
    width = 3
} else if(width >= 450) {
    width = 2
} else if (width < 450) {
    width = 1
}

let comboWidth = window.innerWidth
if(comboWidth >= 1531) {
    comboWidth = 4
} else if(comboWidth >= 997) {
    comboWidth = 3
} else if (comboWidth >= 583) {
    comboWidth = 2
} else if (comboWidth < 583) {
    comboWidth = 1
}

const chooseSwiper = new Swiper('.main__choose-slider.swiper-container', {
    slidesPerView: width,
    spaceBetween: 50,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
    }
    ,

    speed: 1000
    ,
});

const comboSwiper = new Swiper('.main__combo-slider', {
    slidesPerView: comboWidth,
    spaceBetween: 30,
    // autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.combo-button-next',
    },

    speed: 1000
    ,
});



const video = document.querySelector('.header__video');
const playPauseButton = document.querySelector('.main__control');

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

const giftsetList = document.querySelector('.main__giftset-list');
const giftsetArticle = document.querySelector('.main__giftset-article');

giftsetList.addEventListener('click', (e) => {
    let target = e.target;
    let targetData = target.dataset.num;
    if(target.nodeName != 'SPAN') return;

    for(let child of giftsetList.children) {
        child.classList.remove('giftset-active')
    };
    target.classList.add('giftset-active');

    for(let bebebe of giftsetArticle.children) {
        bebebe.classList.remove('gifarticle-active')
        if(bebebe.dataset.num == targetData) {
        bebebe.classList.add('gifarticle-active')
        };
    };
});

let burger = document.querySelector('.burger-field');
let navList = document.querySelector('.header__nav-container')

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');

    navList.classList.toggle('nav-active');
})