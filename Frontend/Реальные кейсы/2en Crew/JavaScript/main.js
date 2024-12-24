const contactList = document.querySelector('.footer__contact-list');

contactList.addEventListener('mouseover', (e) => {
    let target = e.target;
    let modal = target.nextElementSibling;
    if (target.classList.contains('footer__contact-img') == true) {
        modal.classList.remove('closedModal');
    };
});

contactList.addEventListener('click', (e) => {
    let target = e.target;
    let modal = target.nextElementSibling;

    if (target.classList.contains('footer__modal-closed') == true) {
        parent = target.parentNode;
        modal = parent.parentNode;
        modal.classList.add('closedModal');
    } else {
        return
    };
});

const assortmentBlock = document.querySelector('.main__assortment-block');
const assortmentModalInfo = document.querySelector('.main__assortment-modal-info');
if (assortmentBlock != null) {
    assortmentBlock.addEventListener('mouseover', (e) => {
        let target = e.target;
        let assModal = target.nextElementSibling;
        if (target.classList.contains('main__assortment-modal-img') == true) {
            assModal.style.cssText = 'visibility: visible';
        } else {
            return
        };

        assortmentBlock.addEventListener('click', (e) => {
            let target = e.target;
            let assModal = target.parentNode;
            if (target.classList.contains('main__assortment-modal-closed') == true) {
                assModal.style.cssText = 'visibility: hidden';
            } else {
                return
            }
        });
    });
};


let linksSwiper = document.querySelector('.main__links-swiper');

if (linksSwiper != null) {
    linksSwiper = new Swiper('.main__links-swiper', {
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            1650: {
                slidesPerView: 4.5,
                spaceBetween: 140,
            },

            1250: {
                slidesPerView: 3.5,
                spaceBetween: 15,
            },

            880: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },

            550: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },

            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },


        navigation: {
            nextEl: '.main__links-next',
            prevEl: '.main__links-prev',
        },

    })
};

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.header__top-flex');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('burgerMenuActive');
});

const langSelect = document.querySelector('.header__lang-list');
const langAccImg = document.querySelector('.header__lang-block img');


langSelect.addEventListener('click', (e) =>{
    let target = e.target;
    langChield = langSelect.children;

    langAccImg.classList.toggle('openImg');
    for( let i of langChield) {
        i.classList.toggle('open')
    }
    if(target.parentNode.classList.contains('header__lang')) {
        langSelect.prepend(target.parentNode);
        for( let i of langChield) {
            if(i.classList.contains('select')) {
                i.classList.remove('select');
            };
        };
        target.parentNode.classList.add('select');
    };  
});

const assortmentAcc = document.querySelector('.header__menu-accordion');
const assortmentAccImg = document.querySelector('.header__menu-accordion img');

assortmentAcc.addEventListener('click', (e) => {
    let target = e.target;
    let assortmentChield = assortmentAcc.children;

    assortmentAccImg.classList.toggle('openImg');
    for( let i of assortmentChield) {
        i.classList.toggle('open');
    };
});

