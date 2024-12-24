// let tooltipElem;

// document.onmouseover = function (event) {
//     let target = event.target;

//     // если у нас есть подсказка...
//     let tooltipHtml = target.dataset.tooltip;
//     if (!tooltipHtml) return;
//     child = target.children
//     for(i of child) {
//         alert(i)
//     }


//     // ...создадим элемент для подсказки

//     tooltipElem = document.createElement('div');
//     tooltipElem.className = 'tooltip';
//     tooltipElem.innerHTML = tooltipHtml;
//     document.body.append(tooltipElem);

//     // спозиционируем его сверху от аннотируемого элемента (top-center)
//     let coords = target.getBoundingClientRect();

//     let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//     if (left < 0) left = 0; // не заезжать за левый край окна

//     let top = coords.top - tooltipElem.offsetHeight - 5;
//     if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
//         top = coords.top + target.offsetHeight + 5;
//     }

//     tooltipElem.style.left = left + 'px';
//     tooltipElem.style.top = top + 'px';
// };

// document.onmouseout = function (e) {

//     if (tooltipElem) {
//         tooltipElem.remove();
//         tooltipElem = null;
//     }

// }

// let hero = document.querySelectorAll('.draggable')
// document.addEventListener('mousedown', (event) => {
//     let target = event.target;
//     let shiftX = event.clientX - target.getBoundingClientRect().left;
//     let shiftY = event.clientY - target.getBoundingClientRect().top;
//     if (!target.classList.contains('draggable')) return;
//     target.style.zIndex = 1000;
//     target.style.position = 'absolute';

//     function move(pageX, pageY) {
//         target.style.left = pageX - shiftX + 'px';
//         target.style.top = pageY - shiftY + 'px';
//     };
//     function moveHero(event) {
//         move(event.pageX, event.pageY)
//         let newLeft = event.clientX - shiftX;
//         let newTop = event.clientY - shiftY;
//         if (newLeft < 0) {
//             target.style.left = 0
//         };
//         if (newLeft > window.innerWidth - target.offsetWidth) {
//             target.style.left = (window.innerWidth - target.offsetWidth) + 'px';
//         }
//             if (newTop < 0) {
//                 target.style.top = 0
//             };
//             if(newTop > window.innerHeight - target.offsetHeight ) {
//                 target.style.top = window.innerHeight - target.offsetHeight + 'px'
//             }


//         };

//         document.addEventListener('mousemove', moveHero);
//         document.addEventListener('mouseup', () => {
//             document.removeEventListener('mousemove', moveHero)
//         })
//     })
// document.ondragstart = function () {
//     return false;
// };


// let askMarg = prompt('Отступ?')
// window.addEventListener('scroll', () => {
//     let appendElem = document.createElement('div');
//     appendElem.style.marginTop = askMarg + 'px'
//     appendElem.innerHTML = new Date()
//     let pageEnd = document.body.scrollHeight
//     let coords = pageYOffset + window.innerHeight;
//     if(coords > pageEnd - 100) {
//         document.body.append(appendElem)
//     }

// })

// arrowTop.hidden = true;
// arrowTop.addEventListener('click', () => {
//     document.documentElement.scrollTop = 0
// })
// let coords
// window.addEventListener('scroll', () => {
//     coords = pageYOffset;
//     if(coords > window.innerHeight - 100) {
//     arrowTop.hidden = false
//     };
//     if(coords < window.innerHeight - 100) {
//     arrowTop.hidden = true
//     };
// });


// function isVisible(elem) {
//     let imgCoords = elem.offsetTop;
//     let pageCoords = window.innerHeight;
//     let scrollCoords = pageYOffset;
//     if(imgCoords <= pageCoords) return true
//     if(imgCoords - scrollCoords <= pageCoords ) return true
// }

// function showVisible() {
//     for (let img of document.querySelectorAll('img')) {
//         let realSrc = img.dataset.src;
//         if (!realSrc) continue;

//         if (isVisible(img)) {
//             realSrc += '?nocache=' + Math.random();
//             img.src = realSrc;
//             img.dataset.src = '';
//         }
//     }

// }

// window.addEventListener('scroll', showVisible);
// showVisible();


// let option = new Option('Классика', 'classic', false, true )
// genres.append(option);
// let text = genres.options[genres.selectedIndex];
// alert(text.text)
// function areaEnd() {
//     textarea.style.cssText = 'display: none'
//     view.style.cssText = 'display: block'
//     view.innerHTML = textarea.value;
// }




// let textarea = document.createElement('textarea');

// view.tabIndex = 1;
// view.addEventListener('focus', () => {
// view.style.cssText = 'display: none'
//     let text = view.innerHTML
//     textarea.classList.add('edit');
//     view.after(textarea);
//     textarea.style.cssText = 'display: block';
//     textarea.value = text
// });
// textarea.addEventListener('blur', areaEnd);
// document.addEventListener('keydown', (e) => {
//     if(e.code == 'Enter') {
//     textarea.blur()
//     }
// });



// let table = document.forms.calculator;

// let money = table.elements.money
// let interest = table.elements.interest
// let months = table.elements.months
// table.addEventListener('input', (e) => {
// let initial = +money.value;
// let interestF = +interest.value / 100;
// let years = +months.value / 12;
// let result = Math.round(initial * (1 + interestF) ** years);
// money_before.innerHTML = initial;
// money_after.innerHTML = result;
// let broker = result / initial

// height_after.style.height = 100 * broker + 'px'
// });



// function tableCorr(e) {
//     let target = e.target;
//     let tableText = target.innerHTML
//     let textarea = document.createElement('textarea');

//     let ok = document.createElement('div');
//     let cancel = document.createElement('div');
//     ok.classList.add('choise');
//     cancel.classList.add('choise');

//     textarea.innerHTML = tableText
//     textarea.style.height = target.clientHeight + 'px'

//     if (target.nodeName != 'TD') return;
//     target.hidden = true;
//     target.after(textarea);

//     ok.innerHTML = 'OK';
//     cancel.innerHTML = 'Cancel';
//     textarea.after(ok, cancel);

// if(document.activeElement != textarea) {
//     bagua_table.removeEventListener('click', tableCorr)
// };

//     ok.addEventListener('click', () => {
//     let areaText = textarea.value;
//     target.innerHTML = areaText;
//     textarea.remove();
//     target.hidden = false
//     ok.remove();
//     cancel.remove();
//     bagua_table.addEventListener('click', tableCorr)
//     });

//     cancel.addEventListener('click', () => {
//     textarea.remove();
//     target.hidden = false
//     ok.remove();
//     cancel.remove();
//     bagua_table.addEventListener('click', tableCorr)
//     });
// };


// bagua_table.addEventListener('click', tableCorr);



// let form = document.forms.modalWindow;
// let bttn = form.cancel;
// let input = form.text
// prompt_form_container.hidden = true

// function showPrompt(html, callback) {
//     document.body.classList.add('modal');
//     prompt_message.innerHTML = html;
//     prompt_form_container.hidden = false;
//     input.focus();
//     prompt_form_container.style.width = window.innerWidth + 'px';
//     prompt_form_container.style.height = window.innerHeight + 'px';

//     prompt_form_container.addEventListener('keydown', (e) => {
//         if (e.key != 'Escape') return;
//         callback(null);
//         prompt_form_container.hidden = true;
//     });

//     prompt_form_container.addEventListener('blur', () => {
//         input.focus();
//     });

//     prompt_form_container.addEventListener('submit', () => {
//         let value = form.text.value;
//         callback(value);
//     });

//     bttn.addEventListener('click', () => {
//         callback(null);
//         prompt_form_container.hidden = true;
//     });
// }



// modal.addEventListener('click', () => {
//     showPrompt('gfkggfkg', function (show) {
//         alert('Вы ввели: ' + show)
//     });
// });


// function preloadImages(sources, callback) {
//     let img;
//     let counter = 0;
//     function load() {
//     counter++
//     if(counter == sources.length) callback();
//     }
//     for(let i of sources) {
//     img = document.createElement('img');
//     img.onload = img.onerror = load
//     img.src = i;
// };
// }

// let sources = [
//     "https://en.js.cx/images-load/1.jpg",
//     "https://en.js.cx/images-load/2.jpg",
//     "https://en.js.cx/images-load/3.jpg"
// ];

// // добавляем случайные символы к ссылкам, чтобы избежать кеширования
// for (let i = 0; i < sources.length; i++) {
//     sources[i] += '?' + Math.random();
// }

// // для каждого изображения
// // создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
// function testLoaded() {
//     let widthSum = 0;
//     for (let i = 0; i < sources.length; i++) {
//         let img = document.createElement('img');
//         img.src = sources[i];
//         widthSum += img.width;
//     }
//     alert(widthSum);
// }

// // каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
// preloadImages(sources, testLoaded);