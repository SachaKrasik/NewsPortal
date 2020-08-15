
/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(slideIndex) {
    const slides = document.querySelectorAll(".main_promo_item");
    const dots = document.querySelectorAll(".main_list_item");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" main_list_item-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " main_list_item-active";
}


const dots = document.querySelectorAll(".main_list_item");
dots.forEach((item, index) => item.addEventListener('click', () => {
    currentSlide(index + 1) 
}))

