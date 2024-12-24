
let cards = document.getElementsByClassName('main__direction-cards');
sort.addEventListener('click', (e) => {
    let target = e.target;
    if (target.nodeName != 'BUTTON') return;
    let dataDir = target.dataset.direction;
    if (!dataDir) return;


    Array.from(cards).forEach(card => {
        for (let i = 0; i < card.children.length; i++) {
            card.children[i].hidden = true;

            if (dataDir == 'all') {
                card.children[i].hidden = false;
            };

            if (card.children[i].dataset.direction == dataDir) {
                card.children[i].hidden = false;
            };

            if (card.children[i].dataset.direction == 'next') {
                card.children[i].hidden = false;
            };

        };
    });

});

const teamSwiper = new Swiper(".swiper.team-swiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: '.sw-team-btn-next',
        prevEl: '.sw-team-btn-prev',
    },
    keyboard: true,
});

const studentSwiper = new Swiper(".swiper.student-swiper", {
    navigation: {
        nextEl: '.student-btnNext',
        prevEl: '.student-btnPrev',
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

// let burger = document.querySelector('.burger')
let nav = document.querySelector('.header__top-line')
burger.addEventListener('click', () => {
    burger.classList.toggle('active')

    nav.classList.toggle('open__burger')
});

let lessonUl = document.querySelector('.main__lesson-ul');
let footerAcc1 = document.querySelector('.footer__map-box');
let footerAcc2 = document.querySelector('.footer__courses-box');


function accord(order, targetName, activeClass, maxHeight, type) {
    if (type == 'create') {
        order.addEventListener('click', (e) => {
            let target = e.target;

            if (target.nodeName !== targetName) return;

            let text = target.dataset.text;
            let existingParagraph = target.parentNode.querySelector('p');

            if (!target.classList.contains(activeClass)) {
                // Если параграфа нет, создаем его
                let paragraph = document.createElement('p');
                paragraph.innerHTML = text;
                target.classList.add(activeClass);
                target.parentNode.append(paragraph);
                setTimeout(() => {
                    paragraph.style.maxHeight = maxHeight
                }, 10);
            } else {
                // Если параграф уже существует, удаляем его
                if (existingParagraph) {
                    existingParagraph.style.maxHeight = '0'
                    setTimeout(() => {
                        existingParagraph.remove()
                    }, 800);
                }
                target.classList.remove(activeClass);
            }
        });
    } else {
        order.addEventListener('click', (e) => {
            let target = e.target;

            if (target.nodeName !== targetName) return;

            if (!target.classList.contains(activeClass)) {
                target.classList.add(activeClass);
            } else {
                target.classList.remove(activeClass);
            }
        });
    }
};

accord(lessonUl, 'SPAN', 'order', '200px', 'create');
accord(footerAcc1, 'DIV', 'bebebe', '200px', 'navList');
accord(footerAcc2, 'DIV', 'bebebe', '200px', 'navList');


