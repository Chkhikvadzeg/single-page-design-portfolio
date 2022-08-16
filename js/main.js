const buttonLeft = document.querySelector('#button-left');
const buttonRight = document.querySelector('#button-right');

window.addEventListener('load', () => {
    const sliderContent = document.querySelector('.slider__content');
    const fullWidth = sliderContent.scrollWidth
    sliderContent.scrollLeft += fullWidth / 2 - sliderContent.clientWidth / 2 ;
})


buttonLeft.addEventListener('click', () => {
    const sliderContent = document.querySelector('.slider__content');
    const sliderItemWidth = sliderContent.children[0].clientWidth + parseInt(window.getComputedStyle(sliderContent).gap)
    if(buttonRight.disabled){
        buttonRight.disabled = false;
    }
    if(sliderContent.scrollLeft <= 0) {
        buttonLeft.disabled = true;
    }
    sliderContent.scrollLeft -= sliderItemWidth
})

buttonRight.addEventListener('click', () => {
    const sliderContent = document.querySelector('.slider__content');
    const sliderItemWidth = sliderContent.children[0].clientWidth + parseInt(window.getComputedStyle(sliderContent).gap)
    const fullWidth = sliderContent.scrollWidth
    console.log(fullWidth, sliderContent.scrollLeft + sliderContent.clientWidth)
    if(buttonLeft.disabled) {
        buttonLeft.disabled = false;
    }
    if(fullWidth === sliderContent.scrollLeft + sliderContent.clientWidth) {
        buttonRight.disabled = true;
    }


    sliderContent.scrollLeft += sliderItemWidth
})