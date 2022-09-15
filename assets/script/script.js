const background = document.getElementById('backgroundAnimation')
const background2 = document.getElementById('backgroundAnimation-two')
const shoot = document.getElementById('shootBk')

shoot.addEventListener('mouseenter', () => { 
    background2.style.display = 'block'
    // background.classList.toggle('two')
    console.log(background2.style.display)
})
shoot.addEventListener('mouseout', () => {
    background2.style.display = 'none'
    // background.classList.remove('two')

})