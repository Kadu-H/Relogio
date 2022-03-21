const ponteiroSegundo = document.getElementById("seg")
const ponteiroMinutos = document.getElementById("min")
const ponteiroHoras = document.getElementById("hor")


const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
}


const setClock = () =>{
    const atualDate = new Date()

    const secondsPercentage = atualDate.getSeconds() / 60
    const minutesPercentage = atualDate.getMinutes() / 60
    const hoursPercentage = atualDate.getHours() / 12

    setRotation(ponteiroSegundo, secondsPercentage);
    setRotation(ponteiroMinutos, minutesPercentage);
    setRotation(ponteiroHoras, hoursPercentage);

}
setClock();

setInterval(setClock,1000);