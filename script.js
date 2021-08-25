setInterval(setClock,1000)

const hour=document.querySelector('[data-hour]')
const min=document.querySelector('[data-min]')
const sec=document.querySelector('[data-sec]')

function setClock(){
   const currenData=new Date()
   const secRatio=currenData.getSeconds()/60
   const minRatio=(secRatio+currenData.getMinutes())/60
   const hourRatio=(minRatio+currenData.getHours())/12 
setRotation(sec,secRatio)
setRotation(min,minRatio)
setRotation(hour,hourRatio)

}
 function setRotation(element, rotationRatio){
     element.style.setProperty('--rotation',rotationRatio*360)
 }

 setClock()