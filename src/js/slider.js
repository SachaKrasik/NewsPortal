
/* Индекс слайда по умолчанию */
let slideIndexNews = 1;
showSlidesNews(slideIndexNews);

/* Устанавливает текущий слайд */
function currentSlideNews(n) {
    showSlidesNews(slideIndexNews = n);
}
/* Основная функция слайдера */
function showSlidesNews(slideIndexNews) {
    const slides = document.querySelectorAll(".slider-desc"),
        dots = document.querySelectorAll(".slider-dots-item");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide", "");
    }
    slides[slideIndexNews - 1].style.display = "flex";
    dots[slideIndexNews - 1].className += " active";
}

const dotsNews = document.querySelectorAll(".slider-dots-item");
dotsNews.forEach((item, index) => item.addEventListener('click', () => {
    currentSlideNews(index + 1)
}))


