setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-min-hand]')
const secHand = document.querySelector('[data-sec-hand]')

function setClock(){
    const currentDate = new Date()
    const secRatio = currentDate.getSeconds() / 60
    const minRatio = (secRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minRatio + currentDate.getHours()) / 12
    setRotation(secHand, secRatio) 
    setRotation(minHand, minRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function nightMode() {
    const checkbox = document.getElementById('checkbox')

    document.body.classList.toggle('dark-mode');
}

setClock();
checkbox.addEventListener('change', nightMode);

