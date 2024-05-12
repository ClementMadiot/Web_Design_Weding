const menuBtn = document.getElementById('menuBtn')
const navLinks = document.getElementById('navLinks')
const menuBtnIcon = menuBtn.querySelector('i')

window.sr = new ScrollReveal();


//* Menu Toggle
menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open')
  
  const isOpen = navLinks.classList.contains('open')
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')

  navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open')
    menuBtnIcon.setAttribute('class', 'ri-menu-line')
  })
})

//* Display Nav 
const navArray = [
  {
    id: 'n1',
    a: `<a href="#home">home</a>`,
  },
  {
    id: 'n2',
    a: `<a href="#about">about</a>`,
  },
  {
    id: 'n3',
    a: `<a href="#service">services</a>`,
  },
  {
    id: 'n4',
    a: `<a href="#"><img src="assets/logo-white.png" alt="logo-white" /></a>`,
  },
  {
    id: 'n5',
    a: `<a href="#client">client</a>`,
  },
  {
    id: 'n6',
    a: `<a href="#blog">blog</a>`,
  },
  {
    id: 'n7',
    a: `<a href="#contact">contact us</a>`,
  },
]

function displayNavBar(nav){
  let navArrayItems = nav
  .map(function(item){
    return`
    <li id='${item.id}'>${item.a}</li>
    `
  }).join('')
  navLinks.innerHTML = navArrayItems
}
displayNavBar(navArray)

//* ScrollReveal 
const scrollRevealOption = {
  discance: '50px',
  origin: 'bottom',
  duration: 1000,
}

sr.reveal('#about h2', {
  ...scrollRevealOption,
})
sr.reveal('#about p',{
  ...scrollRevealOption,
  delay:300,
  interval: 300
})
sr.reveal('#about img',{
  ...scrollRevealOption,
  delay:1000
})