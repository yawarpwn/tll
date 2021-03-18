const menu = document.getElementById('navbar-menu');
const burgerBtn = document.getElementById('btn-menu')
const websideDark = document.querySelector('.webside')

const mobileMenu = () => {
  menu.classList.toggle('navbar__menu--active')
  websideDark.classList.toggle('webside--dark')
  burgerBtn.classList.toggle('btn-menu--active')
}

burgerBtn.addEventListener('click', mobileMenu)

//DropDown Function
const senalesMenu = document.getElementById('btn-link1')
const seguridadMenu = document.getElementById('btn-link2')
const ssm = document.getElementById('senales-seguridad-menu')
const sfm = document.getElementById('senales-fotoluminiscentes-menu')
const stm = document.getElementById('senales-transito-menu')

senalesMenu.addEventListener('click', () => {
  const dropSenales = document.getElementById('btn-dropdown1')
  dropSenales.classList.toggle('navbar__icon-sub-menu--active')
  document.getElementById('dropdown1').classList.toggle('navbar__dropdown--active')
})

seguridadMenu.addEventListener('click', () => {
  const dropSenales = document.getElementById('btn-dropdown2')
  dropSenales.classList.toggle('navbar__icon-sub-menu--active')
  document.getElementById('dropdown2').classList.toggle('navbar__dropdown--active')
})

//Sub dropdown funtion
ssm.addEventListener('click', () => {
  const ar = document.getElementById('arrow-ss')
  ar.classList.toggle('navbar__icon-sub-menu--active')
  document.getElementById('senales-seguridad-dropdown').classList.toggle('navbar__sub-dropdown--active')
})

sfm.addEventListener('click', () => {
  const ar = document.getElementById('arrow-sf')
  const dd = document.getElementById('senales-fotoluminiscentes-dropdown')
  dd.style.marginTop = '0px'
  dd.classList.toggle('navbar__sub-dropdown--active')
  ar.classList.toggle('navbar__icon-sub-menu--active')
})


stm.addEventListener('click', () => {
  const ar = document.getElementById('arrow-st')
  const dd = document.getElementById('senales-transito-dropdown')
  dd.style.marginTop = '0px'
  dd.classList.toggle('navbar__sub-dropdown--active')
  ar.classList.toggle('navbar__icon-sub-menu--active')
})

window.addEventListener('scroll', () => {
  let navbar = document.querySelector('.navbar')
  navbar.classList.toggle('sticky', window.scrollY > 0)
})
