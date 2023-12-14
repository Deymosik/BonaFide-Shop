document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');

    setInterval(() => {
        const firstSlide = slider.children[0];
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = "translateX(-" + (firstSlide.offsetWidth + 10) + "px)"; /* 10px - отступ между блоками */
        
        setTimeout(() => {
            slider.style.transition = "none";
            slider.appendChild(firstSlide);
            slider.style.transform = "translateX(0)";
        }, 500); /* 0.5 секунды, согласно значению transition */
    }, 3000); /* 3 секунды, согласно вашему требованию */
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

        // Настроим поведение кнопки "Назад"
        Telegram.WebApp.BackButton.show(); // Это покажет кнопку "Назад", если она скрыта
 
        // Сообщаем Telegram Web App, что мы хотим перехватить действие "Назад"
        Telegram.WebApp.BackButton.onClick(() => {
            // Здесь ты можешь выполнить любые действия при нажатии на кнопку "Назад"
            // Например, вернуть пользователя на предыдущую страницу:
            // window.history.back();
 
            // Или закрыть WebApp:
            Telegram.WebApp.close();
        });

        Telegram.WebApp.expand();

        
        
        
    });
    Telegram.WebApp.onEvent('themeChanged', 'setThemeClass');
    let bg = Telegram.WebApp.colorScheme;
    if(bg === "light") {
        
    }
    else {

    }
    



