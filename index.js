// ------- Declarations

// Selects the slider container itself, containing the images
const imageSlider = document.querySelector('.slider-wrapper');

// Selects all images and can be used as an array.

const sliderImages = document.querySelectorAll('.slider-wrapper img') 


// Selects the previous and next buttons
const prevButton = document.querySelector('#button-previous');
const nextButton = document.querySelector('#button-next');


// Counter that changes on click to make the transitions based on width later => counter(which may be equal to whatever value) multiplied by the width => resulting in a translateX to the left or right depending on the counter value;

let counter = 1;
const imgSize = sliderImages[0].clientWidth;


function translateByWidthOfImage(){
    imageSlider.style.transform = "translateX(" + (-imgSize * counter) + "px)"
}

translateByWidthOfImage();

// -------- Click event listeners on the 2 buttons 

      // Previous button


//   Interval to avoid overflow on clicking too fast

    // nextButton.setInterval(() => {

        
        nextButton.addEventListener('click', function(){
            imageSlider.style.transition = "transform 200ms";
            setTimeout(()=>{
                counter++;
            }, 200)
            translateByWidthOfImage();
            });

//   Interval to avoid overflow on clicking too fast

    // Next Button
prevButton.addEventListener('click', function(){
    imageSlider.style.transition = "transform 200ms";
    setTimeout(()=>{
        counter--;
    }, 200)
    translateByWidthOfImage();

});


// ------ Transition-end event listener in order to make the slider infinite on last and first children

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




