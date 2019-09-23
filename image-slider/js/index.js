const images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
    ];
let num = 0;
const slider = document.querySelector('#slider');
const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', nextSlide);
function nextSlide () {
    if (num < images.length-1 && num >= 0) {
    num++;
    }
    else {num = 0;}
 slider.src = images[num];
} 
const prevButton = document.querySelector('#prev');
prevButton.addEventListener('click', prevSlide);
function prevSlide () {
     if (num < images.length && num > 0) { 
    num--;
     }
     else {num = images.length-1;}
    slider.src = images[num];
}

