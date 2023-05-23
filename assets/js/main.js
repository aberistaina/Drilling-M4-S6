let here = document.getElementById("here")
let empezar = document.getElementById("empezar")
let cancelar = document.getElementById("cancelar")
let seconds = document.getElementById("seconds")
let temporizador;

empezar.addEventListener("click", () =>{
    let tiempo = seconds.value 
    empezar.disabled = true
    cancelar.disabled = false
    temporizador = setInterval(() =>{

        here.innerText =  tiempo < 10 ? `0${tiempo}` : tiempo
        tiempo--
        
            if(tiempo < 0){
                empezar.disabled = false
                sonarAlarma()
                clearInterval(temporizador)
            }
    },1000);
})

cancelar.addEventListener("click",() =>{
    empezar.disabled = false
    cancelar.disabled = true
    clearInterval(temporizador)
    seconds.value = "00"
    here.innerText = "00"

})

function sonarAlarma(){
    let alarma = new Audio("./assets/audio/alarma2.mp3")
    alarma.play()
    setTimeout(() =>{
        alarma.pause()
    },3000)

}
