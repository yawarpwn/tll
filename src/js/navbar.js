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
const btnDropdown1 = document.getElementById('btn-dropdown1')
const btnDropdown2 = document.getElementById('btn-dropdown2')
const dropDown1 = document.getElementById('dropdown1')
const dropDown2 = document.getElementById('dropdown2')
const btnLink1 = document.getElementById('btn-link1')
const btnLink2 = document.getElementById('btn-link2')

const btnDown = (e) => {
  dropDown1.classList.toggle('navbar__dropdown--active')
  btnDropdown1.classList.toggle('navbar__icon-sub-menu--active')
  event.preventDefault()
}
btnLink1.addEventListener('click', btnDown)

const btnDown2 = (e) => {
  dropDown2.classList.toggle('navbar__dropdown--active')
  btnDropdown2.classList.toggle('navbar__icon-sub-menu--active')
  event.preventDefault()
}
btnLink2.addEventListener('click', btnDown2)
