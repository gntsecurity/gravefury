// assets/js/scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.hero-image');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Reset all slides and dots
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function startSlideshow() {
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Initial display and start slideshow
    showSlide(currentSlide);
    startSlideshow();

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval); // Reset interval on manual navigation
            showSlide(index);
            startSlideshow(); // Restart slideshow after manual change
        });
    });
});
