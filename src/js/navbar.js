const menu = document.getElementById('navbar-menu');
const burgerBtn = document.getElementById('btn-menu')
const websideDark = document.querySelector('.webside')

const mobileMenu = () => {
  menu.classList.toggle('navbar__menu--active')
  websideDark.classList.toggle('webside--dark')
  burgerBtn.classList.toggle('btn-menu--active')
}

burgerBtn.addEventListener('click', mobileMenu)

//DropDown
//const btnDropdown1 = document.getElementById('btn-dropdown1')
//const btnDropdown2 = document.getElementById('btn-dropdown2')
//const dropDown1 = document.getElementById('dropdown1')
//const dropDown2 = document.getElementById('dropdown2')
//const btnLink1 = document.getElementById('btn-link1')
//const btnLink2 = document.getElementById('btn-link2')
//const dropSseguridad = document.getElementById('dropdown-senales-seguridad')
//const btnSseguridad = document.getElementById('btn-senales-seguridad') 

//const btnDown = (e) => {
  //dropDown1.classList.toggle('navbar__dropdown--active')
  //btnDropdown1.classList.toggle('navbar__icon-sub-menu--active')
  //event.preventDefault()
//}
//btnLink1.addEventListener('click', btnDown)

//btnSseguridad.addEventListener('click', () => {
  //btnSseguridad.classList.toggle('navbar__icon-sub-menu--active')
  //dropSseguridad.classList.toggle('navbar__dropdown--active')
//})

//btnLink1.addEventListener('mouseover', () => {
  //dropDown1.classList.toggle('navbar__dropdown--active')
//})

//DropDown Function
const senalesMenu = document.getElementById('btn-link1')
const seguridadMenu = document.getElementById('btn-link2')
const ssm = document.getElementById('senales-seguridad-menu')

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

ssm.addEventListener('click', () => {
  const ar = document.getElementById('arrow-ss')
  ar.classList.toggle('navbar__icon-sub-menu--active')
  document.getElementById('senales-seguridad-dropdown').classList.toggle('navbar__sub-dropdown--active')
})

window.addEventListener('scroll', () => {
  let navbar = document.querySelector('.navbar')
  navbar.classList.toggle('sticky', window.scrollY > 0)
})
