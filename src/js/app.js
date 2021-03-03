
//gsap.registerPlugin(ScrollTrigger);

//gsap.from('.animate-hero', {
  //duration: 0.6,
  //opacity: 0,
  //y: -150,
  //stagger: 0.3
//})

//gsap.from('.animate-services', {
  //scrollTrigger: '.animate-services',
  //duration: 0.5,
  //opacity: 1,
  //x: -150,
  //stagger: 0.122
//})

gsap.from('.animate-img', {
  scrollTrigger: '.team',
  duration: 1.2,
  opacity: 0,
  x: -200,
})

gsap.from('.animate-img-second', {
  scrollTrigger: '.team',
  duration: 1.2,
  opacity: 0,
  x: 200,
})


