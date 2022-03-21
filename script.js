const ponteiroSegundo = document.querySelector(".ponteiro.segundos")
const ponteiroMinutos = document.querySelector(".ponteiro.minutos")
const ponteiroHoras = document.querySelector(".ponteiro.horas")


const setClock = () =>{
    const atualDate = new Date()

    const secondsPercentage = atualDate.getSeconds() / 60
    const minutesPercentage = atualDate.getMinutes() / 60
    const hoursPercentage = atualDate.getHours() / 60

}