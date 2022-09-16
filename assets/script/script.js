const background2 = document.getElementById('backgroundAnimation-two')
const shoot = document.getElementById('shootBk')

shoot.addEventListener('mouseenter', () => { 
    background2.style.display = 'block'
})
shoot.addEventListener('mouseout', () => {
    background2.style.display = 'none'
})

function nav() {
    let lista = document.getElementById('lista')
    if(lista.style.display == '' || lista.style.display == 'none'){
        lista.style.display = 'flex'
    }else{
        lista.style.display = 'none'
    }
}