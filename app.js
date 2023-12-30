document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.children.length;
        updateSlides();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
        updateSlides();
    }

    function updateSlides() {
        const translateValue = -currentIndex * 100;
        slides.style.transform = `translateX(${translateValue}%)`;
    }

    // Добавляем обработчики событий для свайпа на мобильных устройствах
    let touchStartX = 0;
    let touchEndX = 0;

    slides.addEventListener('touchstart', handleTouchStart, false);
    slides.addEventListener('touchend', handleTouchEnd, false);

    function handleTouchStart(event) {
        touchStartX = event.changedTouches[0].screenX;
    }

    function handleTouchEnd(event) {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    }

    function handleSwipe() {
        const swipeThreshold = 30; // Минимальная дистанция свайпа для переключения слайдов

        if (touchEndX < touchStartX - swipeThreshold) {
            showNextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            showPrevSlide();
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Сразу вызываем ready, чтобы сообщить Telegram, что веб-приложение загружено
    Telegram.WebApp.ready();
    
    // Получаем данные пользователя
    const user = Telegram.WebApp.initDataUnsafe.user;
    if (user) {
      // Теперь у нас есть доступ к данным пользователя, например, к имени
      const username = user.first_name +" "+ user.last_name; // Пример использования имени
      // Вставляем имя в элемент div с id="username"
      document.getElementById('username').textContent = username;
    } else {
      console.log("Пользовательские данные недоступны.");
    }

        Telegram.WebApp.expand();


    });
    Telegram.WebApp.onEvent('themeChanged', 'setThemeClass');
    let bg = Telegram.WebApp.colorScheme;
    if(bg === "light") {
        
    }
    else {

    }



// Получаем кнопку добавления в корзину
var button = document.querySelector(".product-button");

// Добавляем обработчик события клика на кнопку
button.addEventListener("click", function(event) {
    // Отменяем действие по умолчанию (переход по ссылке)
    event.preventDefault();

    // Получаем id товара из атрибута data-id кнопки
    var id = this.getAttribute("data-id");

    // Получаем данные о корзине из локального хранилища или создаем пустой объект, если их нет
    var cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Увеличиваем количество товара с данным id на 1 или устанавливаем его равным 1, если его нет в корзине
    cart[id] = (cart[id] || 0) + 1;

    // Сохраняем обновленные данные о корзине в локальное хранилище
    localStorage.setItem("cart", JSON.stringify(cart));

    // Обновляем счетчик товаров в корзине
    updateCartCount();
});

// Функция для обновления счетчика товаров в корзине
function updateCartCount() {
    // Получаем элемент счетчика
    var count = document.querySelector(".cart-count");

    // Получаем данные о корзине из локального хранилища или создаем пустой объект, если их нет
    var cart = JSON.parse(localStorage.getItem("cart")) || {};

    // Считаем общее количество товаров в корзине
    var total = 0;
    for (var id in cart) {
        total += cart[id];
    }

    // Устанавливаем текст счетчика равным общему количеству товаров
    count.textContent = total;
}

// Вызываем функцию обновления счетчика при загрузке страницы
updateCartCount();



