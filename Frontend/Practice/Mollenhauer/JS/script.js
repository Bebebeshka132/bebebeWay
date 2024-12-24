let clientWidth = document.documentElement.clientWidth;
const headerGrid = document.querySelector('.header__bottom-grid')

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

accord(headerGrid, 'SPAN', 'active', '25px', 'create');

const benefitSwiper = new Swiper('.main__benefit-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true, // включаем отложенную загрузку изображений

    pagination: {
        el: '.main__benefit-pag',
        clickable: true,
    },

    navigation: {
        nextEl: '.main__benefit-next',
        prevEl: '.main__benefit-prev',
    }

    ,
})

let keySLide = 0;
if (clientWidth >= 1800) {
    keySLide = 4
} else if (clientWidth >= 1400) {
    keySLide = 3
} else if (clientWidth >= 900) {
    keySLide = 2
} else if (clientWidth <= 470 || clientWidth >= 470) {
    keySLide = 1
}


const keySwiper = new Swiper('.main__key-slider', {
    slidesPerView: keySLide,
    spaceBetween: 50,
    lazy: true,

    pagination: {
        el: '.main__key-pag',
    },

    navigation: {
        nextEl: '.main__key-next',
        prevEl: '.main__key-prev',
    }

    ,
})

const revSwiper = new Swiper('.main__rev-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    lazy: true,

    pagination: {
        el: '.main__rev-pag',
    },

    navigation: {
        nextEl: '.main__rev-next',
        prevEl: '.main__rev-prev',
    }

    ,
})


let slideBroad = 0
if (clientWidth >= 1200) {
    slideBroad = 4
} else if (clientWidth >= 800) {
    slideBroad = 3
} else if (clientWidth >= 500) {
    slideBroad = 2
} else if (clientWidth <= 470) {
    slideBroad = 1
}

const mainBroadWrapper = document.querySelector('.main__broad-flex');

let broadChield = mainBroadWrapper.children;
if (clientWidth <= 1260) {
    for (let chield of broadChield) {
        chield.classList.add('swiper-slide')
    }

    const broadSlider = new Swiper('.main__broad-slider', {
        slidesPerView: slideBroad,
        lazy: true,

        pagination: {
            el: '.main__broad-pag',
        },
    })
};


















const burger = document.querySelector('.burger');
const navList = document.querySelector('.header__nav-container');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('navList');
})

let tickets = '';
let count = 0;

for(let i = 1;i <= 55555; i++) {
    let countNum = 0;
    tickets = String(i);

    for(let s of tickets.split('')) {
        if(s == '5') {
            countNum++;
            if(countNum % 2 == 0) {
                console.log('выигрыш!')
            }

        }
    }
}
