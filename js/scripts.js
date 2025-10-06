document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.projecten .card-body img');

    // Lightbox container
    const lightbox = document.createElement('div');
    lightbox.classList.add('image-lightbox');
    lightbox.innerHTML = '<img src="" alt="Expanded image">';
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');

    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('show');
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('show');
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    });
});