const background = document.getElementById('backgroundAnimation')
const background2 = document.getElementById('backgroundAnimation-two')
const shoot = document.getElementById('shootBk')

shoot.addEventListener('mouseenter', () => { 
    background2.style.display = 'block'
})
shoot.addEventListener('mouseleave', () => {
    background2.style.display = 'none'
})