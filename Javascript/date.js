function myClock(){
    let date = new Date()
    let hour = date.getHours()
    let minut = date.getMinutes()
    hour = hour.toString()
    if(hour.length === 1){
        hour = hour.padStart(2, "0")
    }
    minut = minut.toString()

    if(minut.length === 1){
        minut = minut.padStart(2, "0")
    }
    let myTime = hour + ":" + minut
    let timeText = document.querySelector("#time")
    timeText.textContent = myTime
}
setInterval(() => {
    myClock()
}, 1000)