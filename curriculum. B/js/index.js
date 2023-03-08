//Elementos a  mostrar
const infoContacto = document.getElementById('infoContacto')
const infoConocimientos = document.getElementById('infoConocimientos')
const infoVirtudes = document.getElementById('infoVirtudes')

//Booleanos para controlar el estado

let contactoShow = false
let conocimientosShow = false
let virtudesShow = false

//Contacto
const btnContacto = document.getElementById('Contacto')
btnContacto.addEventListener('click', function () {
    if (!contactoShow) {
        infoContacto.style.display = 'flex'
        infoConocimientos.style.display = 'none'
        infoVirtudes.style.display = 'none'

        contactoShow = true
        conocimientosShow = false
        virtudesShow = false
    }
    else {
        infoContacto.style.display = 'none'
        infoConocimientos.style.display = 'none'
        infoVirtudes.style.display = 'none'

        contactoShow = false
    }

})


//Conocimientos
const btnConocimientos = document.getElementById('conocimientos')
btnConocimientos.addEventListener('click', function () {
    if (!conocimientosShow) {
        infoContacto.style.display = 'none'
        infoConocimientos.style.display = 'flex'
        infoVirtudes.style.display = 'none'
        conocimientosShow = true
        contactoShow = false
        virtudesShow = false
    }
    else {
        infoContacto.style.display = 'none'
        infoConocimientos.style.display = 'none'
        infoVirtudes.style.display = 'none'
        conocimientosShow = false
    }

})

//Virtudes
const btnVirtudes = document.getElementById('virtudes')
btnVirtudes.addEventListener('click', function () {
    if (!virtudesShow) {
        infoContacto.style.display = 'none'
        infoConocimientos.style.display = 'none'
        infoVirtudes.style.display = 'flex'
        contactoShow = false
        conocimientosShow = false
        virtudesShow = true
    }
    else {
        infoContacto.style.display = 'none'
        infoConocimientos.style.display = 'none'
        infoVirtudes.style.display = 'none'
        virtudesShow = false
    }


})