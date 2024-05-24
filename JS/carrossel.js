//João Pedro Mendes Nowicki - Matricula: 202308232746.
//Rafael Kahl Konorath - Matricula: 202308232711.
const CarrosselContainer = document.querySelector('.carrossel-container');
const slides = document.querySelectorAll('.carrossel-slide');
let counter = 0;
const size = slides[0].clientWidth;

function moveCarrossel() {
    CarrosselContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function nextSlide() {
    if (counter >= slides.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    moveCarrossel();
}

function prevSlide() {
    if (counter <= 0) {
        counter = slides.length - 1;
    } else {
        counter--;
    }
    moveCarrossel();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);
