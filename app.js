document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % 4; // 6 - количество слайдов
        updateCarousel();
    }, 3000); // Интервал смены слайдов, в данном случае каждые 2 секунды

    function updateCarousel() {
        const translateValue = -currentIndex * 34;
        carousel.style.transform = `translateX(${translateValue}%)`;
    }
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

