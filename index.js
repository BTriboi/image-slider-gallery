// Declarations


const imageSlider = document.querySelector('.slider-wrapper');
const sliderImages = document.querySelectorAll('.slider-wrapper img')

const prevButton = document.querySelector('#button-previous');
const nextButton = document.querySelector('#button-next');


let counter = 1;
const imgSize = sliderImages[0].clientWidth;





function translateByWidthOfImage(){
    imageSlider.style.transform = "translateX(" + (-imgSize * counter) + "px)"
}

translateByWidthOfImage();

// Click event listeners on the 2 buttons 

      // Previous button
nextButton.addEventListener('click', function togglePrevious(){

    imageSlider.style.transition = "transform 200ms";
    counter++;
    translateByWidthOfImage();
});

    // Next Button
prevButton.addEventListener('click', function toggleNext(){
    imageSlider.style.transition = "transform 200ms";
    counter--;
    translateByWidthOfImage();

});


// Transition-end event listener in order to make the slider infinite on last and first children

imageSlider.addEventListener('transitionend', () => {


    if(sliderImages[counter].classList.contains('lastClone')){

        imageSlider.style.transition = "none";

        counter =  sliderImages.length - 2;

        translateByWidthOfImage();
    }


    if(sliderImages[counter].classList.contains('firstClone')){

        imageSlider.style.transition = "none";

        counter =  sliderImages.length - counter;

        translateByWidthOfImage();
    }
})




