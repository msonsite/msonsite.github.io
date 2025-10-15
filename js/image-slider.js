document.addEventListener("DOMContentLoaded", function() {
  const sliders = document.querySelectorAll('.image-slider');

  sliders.forEach(slider => {
    const slides = slider.querySelector('.slides');
    const totalSlides = slider.querySelectorAll('.slide').length;
    let index = 0;
    let autoplayInterval;
    let isTouching = false; // detecteert of gebruiker swipe vasthoudt

    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');

    const goNext = () => {
      index = (index + 1) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
    };

    const goPrev = () => {
      index = (index - 1 + totalSlides) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
    };

    // Knoppen
    nextBtn.addEventListener('click', () => {
      goNext();
      resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
      goPrev();
      resetAutoplay();
    });

    // Swipe support
    let startX = 0;
    slides.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      isTouching = true;          // pauzeer autoplay tijdens swipe
      clearInterval(autoplayInterval);
    });

    slides.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].clientX - startX;
      if (diff > 50) goPrev();
      if (diff < -50) goNext();
      isTouching = false;         // gebruiker swipe klaar
      resetAutoplay();
    });

    // Autoplay functie
    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        if (!isTouching) goNext(); // alleen bewegen als gebruiker niet swipe vasthoudt
      }, 5000);
    };

    const resetAutoplay = () => {
      clearInterval(autoplayInterval);
      startAutoplay();
    };

    // Start autoplay
    startAutoplay();
  });
});
