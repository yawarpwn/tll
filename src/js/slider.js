function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.carousel__slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
//const slider = document.getElementById('todo-slider')
//let sliderSection = document.querySelectorAll('.todo-slinder__section')
//let sliderSectionLast = sliderSection[sliderSection.length -1]
//const btnRight = document.getElementById('btn-right')
//const btnLeft = document.getElementById('btn-left')

//slider.insertAdjacentElement('afterbegin', sliderSectionLast)

//const next = () => {
  //let sliderSectionFirst = document.querySelectorAll('.main-slider__section')[0] 
  //slider.style.marginLeft = '-200%' 
  //slider.style.transition = 'all 0.5s'
  
  //setTimeout( () => {
    //slider.style.transition = 'none'
    //slider.insertAdjacentElement('beforeend', sliderSectionFirst)
    //slider.style.marginLeft = '-100%'
  //}, 500)
//}

//const prev = () => {
  //let sliderSection = document.querySelectorAll('.main-slider__section')
  //let sliderSectionLast = sliderSection[sliderSection.length -1]
  //slider.style.marginLeft = '0' 
  //slider.style.transition = 'all 0.5s'
  
  //setTimeout( () => {
    //slider.style.transition = 'none'
    //slider.insertAdjacentElement('afterbegin', sliderSectionLast)
    //slider.style.marginLeft = '-100%'
  //}, 500)
//}


//btnRight.addEventListener('click', next)
//btnLeft.addEventListener('click', prev)

//setInterval( () => next(), 5000)

//Main Slinder
let counter = 1
setInterval( () => {
  document.getElementById('radio' + counter).checked = true
  counter++

  if ( counter > 4 ) {
    counter = 1
  } 

}, 5000 )
