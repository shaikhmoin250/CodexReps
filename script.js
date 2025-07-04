document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel .slides img');
    let index = 0;

    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    function showSlide(n) {
        slides[index].classList.remove('active');
        index = (n + slides.length) % slides.length;
        slides[index].classList.add('active');
    }

    document.querySelector('.next')?.addEventListener('click', function() {
        showSlide(index + 1);
    });

    document.querySelector('.prev')?.addEventListener('click', function() {
        showSlide(index - 1);
    });
});
