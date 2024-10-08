const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContainer = document.querySelector('.header-container')
const closeicon = document.querySelector('.close-icon')
const h3 = document.querySelector('.go-to-top')
const nav = document.querySelector('nav')

hamburgerIcon.addEventListener('click', (e)=>{
    e.stopPropagation()
    headerContainer.classList.add('menu-open')
})

nav.addEventListener('click', (e)=>{
    e.stopPropagation()
})

closeicon.addEventListener('click', ()=>{
    headerContainer.classList.remove('menu-open')
})

h3.addEventListener('click', ()=>{
    document.querySelector('body > div').scrollTo(0,0)
})
window.addEventListener('click', ()=>{
    headerContainer.classList.remove('menu-open')
})
