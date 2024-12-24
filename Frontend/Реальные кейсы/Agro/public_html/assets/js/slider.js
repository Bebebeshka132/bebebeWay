const slider = document.querySelector(".news__swiper-wrapper");
const cards = document.querySelectorAll(".news__swiper-slide");
const prevButton = document.querySelector(".news__btn--prev");
const nextButton = document.querySelector(".news__btn--next");

let currentIndex = 1; // Начнем с первого оригинального слайда
const totalCards = cards.length;
const cardWidth = cards[0].clientWidth; // Ширина карточки
const autoScrollInterval = 3000; // Интервал автоматической прокрутки

// Клонируем первый и последний слайды для зацикливания
const firstClone = cards[0].cloneNode(true);
const secondClone = cards[1].cloneNode(true);
const lastClone = cards[totalCards - 1].cloneNode(true);

slider.appendChild(firstClone); // Добавляем клон первого слайда в конец
slider.appendChild(secondClone); // Добавляем клон первого слайда в конец
slider.insertBefore(lastClone, cards[0]); // Добавляем клон последнего слайда в начало

const totalVisibleCards = totalCards + 2; // Учтем начальный и конечный клоны

function updateSliderPosition() {
  const offset = -currentIndex * cardWidth; // Сдвиг слайдера
  slider.style.transition = "transform 0.5s ease"; // Плавный переход
  slider.style.transform = `translateX(${offset}px)`;
}

function moveToNext() {
  currentIndex++; // Переход к следующему слайду

  if (currentIndex > totalCards) {
    // Достигли клона первого слайда
    currentIndex = 1; // Переходим на первый оригинальный слайд
    slider.style.transition = "none"; // Убираем анимацию для мгновенного перехода
    updateSliderPosition(); // Обновляем позицию мгновенно
  } else {
    updateSliderPosition(); // Обновляем позицию с анимацией
  }
}

function moveToPrev() {
  currentIndex--; // Переход к предыдущему слайду

  if (currentIndex < 0) {
    // Вернулись к началу (клон последнего слайда)
    currentIndex = totalCards; // Переход на последний оригинальный слайд
    slider.style.transition = "none"; // Убираем анимацию для мгновенного перехода
    updateSliderPosition(); // Обновляем позицию мгновенно
  } else if (currentIndex === 0) {
    currentIndex = totalCards - 1; // Переход на предпоследний оригинальный слайд
    slider.style.transition = "none"; // Убираем анимацию для мгновенного перехода
    updateSliderPosition(); // Обновляем позицию мгновенно
  } else {
    updateSliderPosition(); // Обновляем позицию с анимацией
  }
}

// События для кнопок
nextButton.addEventListener("click", moveToNext);
prevButton.addEventListener("click", moveToPrev);

// Свайп для мобильных устройств
let startX;
let endX;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", () => {
  if (startX > endX + 50) {
    moveToNext(); // Свайп влево
  } else if (startX < endX - 50) {
    moveToPrev(); // Свайп вправо
  }
});

// Обработчики событий мыши
slider.addEventListener("mousedown", (e) => {
  startX = e.clientX; // Начальная позиция
  slider.addEventListener("mousemove", onMouseMove);
});

slider.addEventListener("mouseup", () => {
  slider.removeEventListener("mousemove", onMouseMove);
});

function onMouseMove(e) {
  endX = e.clientX; // Конечная позиция
}

slider.addEventListener("mouseup", () => {
  if (startX > endX + 50) {
    moveToNext(); // Перетаскивание влево
  } else if (startX < endX - 50) {
    moveToPrev(); // Перетаскивание вправо
  }
});

function updateSlider() {
  slideWidth = slides[0].clientWidth;
  const screenWidth = window.innerWidth;

  // Устанавливаем количество отображаемых слайдов в зависимости от ширины экрана
  if (screenWidth >= 1024) {
    slidesToShow = 3;
  } else if (screenWidth >= 576) {
    slidesToShow = 1;
  } else {
    slidesToShow = 1;
  }

  // Устанавливаем ширину слайдера
  for (const slide of slides) {
    slide.style.minWidth = `${100 / slidesToShow}%`;
  }

  // Обновляем позицию слайдера
  updatePosition();
}

// Функция обновления позиции слайдера
function updatePosition() {
  const offset = -currentIndex * slideWidth; // Сдвиг слайдера
  slider.style.transform = `translateX(${offset}px)`;
}

// Добавление автоматического скроллинга
// setInterval(moveToNext, autoScrollInterval);
