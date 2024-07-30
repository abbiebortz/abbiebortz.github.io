document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slide.children.length;
        if (index >= totalSlides) currentIndex = 0;
        if (index < 0) currentIndex = totalSlides - 1;

        slide.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            currentIndex = idx;
            showSlide(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, 3000);
});
