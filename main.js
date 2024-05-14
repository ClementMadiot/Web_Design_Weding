const menuBtn = document.getElementById('menuBtn')
const navLinks = document.getElementById('navLinks')
const menuBtnIcon = menuBtn.querySelector('i')
const portfolioGrid = document.querySelector('.portfolio_grid')
const serviceGrid = document.querySelector('.service_grid')

const scrollRevealOption = {
  discance: '50px',
  duration: 1000,
  origin: 'bottom'
}

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

function displayNavBar(nav) {
  let navArrayItems = nav
    .map(function (item) {
      return `
    <li id='${item.id}'>${item.a}</li>
    `
    })
    .join('')
  navLinks.innerHTML = navArrayItems
}
displayNavBar(navArray)

//* Display Portfolio
const portfolioArray = [
  {
    id: 'p1',
    img: 'assets/portfolio-1.jpg',
    alt: 'portfolio-1',
  },
  {
    id: 'p2',
    img: 'assets/portfolio-2.jpg',
    alt: 'portfolio-2',
  },
  {
    id: 'p3',
    img: 'assets/portfolio-3.jpg',
    alt: 'portfolio-3',
  },
]
function displayPortfolio(portfolio) {
  let portfolioArrayItems = portfolio
    .map(function (i) {
      return `
    <div id='${i.id}' class="portfolio_card">
    <img src="${i.img}" alt="${i.alt}">
    <div class="portfolio_content">
      <button>view portfolio</button>
    </div>
  </div>
    `
    })
    .join('')
  portfolioGrid.innerHTML = portfolioArrayItems
}
displayPortfolio(portfolioArray)

//* Display Services
const serviceArray = [
  {
    id: 's1',
    title: 'portrait sessions',
    desc: 'Our portrait sessions are designed to showcase your personality and style in stunning imagery.',
  },
  {
    id: 's2',
    title: 'maternality sessions',
    desc: 'Embrace the beauty and miracle of new life with our maternity and newborn photography sessions',
  },
  {
    id: 's3',
    title: 'family sessions',
    desc: 'Cherish the bond of family with our custom-designed playful moments and portrait sessions',
  },
]

function displayServices(service) {
  let displayServiceItems = service
    .map(function (i) {
      return `
    <div id='${i.id}' class="service_card">
    <h4>${i.title}</h4>
    <p>${i.desc}</p>
  </div>
    `
    })
    .join('')
  serviceGrid.innerHTML = displayServiceItems
}
displayServices(serviceArray)

//* ScrollReveal

//: Header
ScrollReveal().reveal('#about h2', {
  ...scrollRevealOption,
})
ScrollReveal().reveal('#about p', {
  ...scrollRevealOption,
  delay: 300,
  interval: 300,
})
ScrollReveal().reveal('#about img', {
  ...scrollRevealOption,
  delay: 1000,
})
//: Service
ScrollReveal().reveal('#service h2', {
  ...scrollRevealOption,
})
ScrollReveal().reveal('.service_description', {
  ...scrollRevealOption,
  delay: 500,
})
ScrollReveal().reveal('.service_card', {
  duration:1000,
  delay: 1000,
  interval:500,
})
