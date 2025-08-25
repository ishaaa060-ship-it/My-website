let index = 0;
const slides = document.getElementById("slides");
const total = 9;
const step = 3;
const imagWidth = 300;

function showSlide(){
    slides.style.transform = `translateX(${-imagWidth*index}px)`;
}
function nextSlide(){
    index+=step;
    if(index>=total)index=0;
    showSlide();
}
function prevSlide(){
    index-=step
    if(index<0)index = total - step;
    showSlide();
}


