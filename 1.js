let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
   
    if (index < 0) {
        currentIndex = totalSlides - 1; 
    } else if (index >= totalSlides) {
        currentIndex = 0; 
    } else {
        currentIndex = index;
    }

    
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}


prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});


nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});


setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
