const buttonLeft = document.querySelector('#button-left');
const buttonRight = document.querySelector('#button-right');
const sliderContent = document.querySelector('.slider__content');
const sliderItemWidth = sliderContent.children[0].clientWidth + parseInt(window.getComputedStyle(sliderContent).gap)

buttonLeft.addEventListener('click', () => {
    sliderContent.scrollLeft -= sliderItemWidth
})

buttonRight.addEventListener('click', () => {
    sliderContent.scrollLeft += sliderItemWidth
})