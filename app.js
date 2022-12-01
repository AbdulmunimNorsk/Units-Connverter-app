/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let converter = document.getElementById('convert')
let addText = document.getElementById("addText")
const tall = document.getElementById("res1")
const volume = document.getElementById("res2")
const mass = document.getElementById("res3")

converter.addEventListener("click", function(){
    calc()
    addText.value = ''

})

function calc(){
    let m2feet =  addText.value * 3.281
    let feet2m =  addText.value / 3.281
    let leter2galoon = addText.value * 0.264
    let galoon2leter = addText.value / 0.264
    let kg2pound = addText.value * 2.204
    let pond2kg = addText.value / 2.204

    let message1 = JSON.stringify(`<span>${addText.value}</span> meter = <strong>${Number(m2feet.toFixed(2))}</strong> feet | <span>${addText.value}</span> feet = <strong>${Number(feet2m.toFixed(2))}</strong> meters`)
    tall.innerHTML = (message1.slice(1, -1))

    let message2 = JSON.stringify(`<span>${addText.value}</span> letters = <strong>${Number(leter2galoon.toFixed(2))}</strong> gallons | <span>${addText.value}</span> gallons = <strong>${Number(galoon2leter.toFixed(2))}</strong> letters`)
    volume.innerHTML = (message2.slice(1, -1))

    let message3 = JSON.stringify(`<span>${addText.value}</span> kilos = <strong>${Number(kg2pound.toFixed(2))}</strong> pounds | <span>${addText.value}</span> pounds = <strong>${Number(pond2kg.toFixed(2))}</strong> kilos`)
    mass.innerHTML = (message3.slice(1, -1))
}




