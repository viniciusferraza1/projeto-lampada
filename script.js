const turnOn = document.getElementById('turnOn')
const turnOff= document.getElementById('turnOff')
const lampada = document.getElementById('lamp')


function lampOn () {
    lamp.src = './img/ligada.jpg';
}

function lampOff() {
    lamp.src = './img/desligada.jpg';
}

function broken () {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', broken)
