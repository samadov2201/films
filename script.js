const slideContainer = document.querySelector('.slider');


const sliderImages = [
    {
        src: 'batman.jpg',
    },
    {
        src: 'top-gun.jpg',
    },
    {
        src: 'movie.jpg',
    }
];

let slideCounter = 0;
function slide() {
    if (slideCounter === sliderImages.length - 1) {

        slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
        ), url(${sliderImages[0].src})`;
        slideCounter = -1;


    }
    slideContainer.style.backgroundImage = `linear-gradient(
        to right,
        rgba(34, 34, 34, 0.4),
        rgba(68, 68, 68, 0.4)
        ),url(${sliderImages[slideCounter + 1].src})`;

    slideCounter++;


}
setInterval(slide, 2000);
