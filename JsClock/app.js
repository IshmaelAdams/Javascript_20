
setInterval(setDate, 1000);

const hourHand = document.querySelector('[data-hour]')
const minHand = document.querySelector('[data-min]')
const secHand = document.querySelector('[data-sec]')


function setDate(){
  const now = new Date();
  const sec = now.getSeconds()/60;
  const min = (sec + now.getMinutes())/60;
  const hour = (min + now.getHours())/12;

setRotatn(secHand, sec)
setRotatn(minHand, min)
setRotatn(hourHand,hour)
}

function setRotatn(e, rotatn){
  e.style.setProperty('--rotation',rotatn * 360)
}

setDate();
