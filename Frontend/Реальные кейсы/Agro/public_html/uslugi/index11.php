<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Raleway:wght@400;500;600;700&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="../assets/libs/swiper/swiper-bundle.min.css">
  <link rel="stylesheet" href="../assets/libs/izitoast/css/iziToast.min.css">
  <link rel="stylesheet" href="../assets/css/main.css">
  <link rel="stylesheet" href="../assets/css/header-special.css">
  <!-- <meta name="keywords" content="Доставка из Китая, купить товар из Китая, Карго, Выкуп товаров из Китая, Выкуп товаров 1688.com">
<meta name="description" content="ВолгаЦифра - у, консолидация, доставка товаров из Китая в Россиию. Работаем с ООО и ИП. Возможна оплата на карту Тиньков или Сбер. Выкуп товаров 1688.com ">
<meta name="viewport" content="width=device-width, initial-scale=1">-->
  <title>Услуги</title>
</head>

<body>
  <!-- WRAPPER -->
  <div class="wrapper">

    <!-- CONTAINER -->
<?php
// Подключаем файл компонентов только один раз
include_once __DIR__ . '/../components.php';
?>

<?php
// Вызываем футер
renderNewHeader();
?>
      
    </div>
    <main>
      <section class="marquee__wrapper">
                <div class="marquee">
                <span class="announcement-bar__item">
                    <span class="dot__el"></span>

                    <a href="tel:+79370922200" class="phone__text">          
                    Позвоните нам - 89370922000
                    </a>
            
                    <span class="dot__el"></span>
            
                    <span class="date__text">
                    T40 в наличии с документами РосАвиации
                    </span>
                </span>
            
                <span class="announcement-bar__item">
                    <span class="dot__el"></span>

                    <a href="tel:+79370922200" class="phone__text">          
                    Позвоните нам - 89370922000
                    </a>
            
                    <span class="dot__el"></span>
            
                    <span class="date__text">
                    T40 в наличии с документами РосАвиации
                    </span>
                </span>

                <span class="announcement-bar__item">
                    <span class="dot__el"></span>

                    <a href="tel:+79370922200" class="phone__text">          
                    Позвоните нам - 89370922000
                    </a>
            
                    <span class="dot__el"></span>
            
                    <span class="date__text">
                    T40 в наличии с документами РосАвиации
                    </span>
                </span>

                <span class="announcement-bar__item">
                    <span class="dot__el"></span>

                    <a href="tel:+79370922200" class="phone__text">          
                    Позвоните нам - 89370922000
                    </a>
            
                    <span class="dot__el"></span>
            
                    <span class="date__text">
                    T40 в наличии с документами РосАвиации
                    </span>
                </span>

                <span class="announcement-bar__item">
                    <span class="dot__el"></span>

                    <a href="tel:+79370922200" class="phone__text">          
                    Позвоните нам - 89370922000
                    </a>
            
                    <span class="dot__el"></span>
            
                    <span class="date__text">
                    T40 в наличии с документами РосАвиации
                    </span>
                </span>

                <span class="announcement-bar__item">
                    <span class="dot__el"></span>

                    <a href="tel:+79370922200" class="phone__text">          
                    Позвоните нам - 89370922000
                    </a>
            
                    <span class="dot__el"></span>
            
                    <span class="date__text">
                    T40 в наличии с документами РосАвиации
                    </span>
                </span>
                </div>
            </section>
      
      <section class="advantages">
        <div class="container">
          <div class="section_texts">
            <div class="medium_title">
              Услуги
            </div>
            <div class="description">
              Профессианальное услуги для цифрового цемледелия
            </div>
          </div>
        </div>
      </section>
      
      <div class="overlay"></div>
 
      
      
      

    </main>

<?php
// Вызываем футер
renderFooter1();
?>

    <!-- MODAL -->
    <div class="modal">
      <div class="container">
        <div class="modal_row">
          <div class="modal_header">
            <div class="medium_title">
              Заполните форму
            </div>
            <div class="close_btn">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.4499 29.85L0.149902 26.55L11.6999 15L0.149902 3.44999L3.4499 0.149994L14.9999 11.7L26.5499 0.149994L29.8499 3.44999L18.2999 15L29.8499 26.55L26.5499 29.85L14.9999 18.3L3.4499 29.85Z"
                  fill="#203253" />
              </svg>
            </div>
          </div>
          <form action="send.php" method="post" id="order_form">
            <input type="hidden" name="form_type" value="modal_order" />
            <input type="text" placeholder="Ваше имя" name="name">
            <input type="tel" id="phone" name="phone" required>
            <input type="email" placeholder="Ваша электронная почта" name="email">
            <textarea placeholder="Какой товар вы ищите или хотите доставить в Россию?" name="title"></textarea>
            <button>Отправить заявку</button>
          </form>
          <div class="terms_of_use">
            Отправляя заявку вы соглашаетесь с <a href="#">Условиями использования</a> и <a href="#">Политикой
              конфиденциальности,</a> тем самым соглашаетесь на обработку персональных данных
          </div>
        </div>
      </div>
    </div>
    <script src="../assets/libs/jquery/jquery-3.6.3.min.js"></script>
    <script src="../assets/libs/swiper/swiper-bundle.min.js"></script>
    <script src="../assets/libs/inputmask/jquery.maskedinput.js"></script>
    <script src="../assets/libs/izitoast/js/iziToast.min.js"></script>
    <script src="../assets/js/scripts.js"></script>
<script>
    (function(doc, scr, id) {
        var js, fjs = doc.getElementsByTagName(scr)[0];
        if (doc.getElementById(id)) return;
            js = doc.createElement(scr); 
            js.id = id;
            js.src = 'https://contactus.nikba.com/contactus.min.js';
            fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'contactus-sdk'));
</script>
<div  id="contactus" 
      whatsapp="+79370922000" 
      whatsapp-label="Написать сообщение" 
      title="Есть вопросы? Напишите нам!"
      position="right"
></div>
    <script src="../assets/js/slider.js"></script>
    <script src="../assets/js/accordion.js"></script>
  </div>
</body>

</html>