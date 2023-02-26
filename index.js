const meter = 3.281
const liter = 0.264
const kilogram = 2.204
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const pBoxMeter = document.getElementById("p-box-meter")
const pBoxVolume = document.getElementById("p-box-volume")
const pBoxMass = document.getElementById("p-box-mass")


let unitMeter = 0
let unitVolume = 0
let unitMass = 0
let unitFeetToMeter = 0
let unitGallonToLiter = 0
let unitPoundToKilo = 0

let myUnit = ""


btnEl.addEventListener("click", function() {
    myUnit = Number(inputEl.value)
    render()
})

function render() {
    
    unitMeter = parseFloat(myUnit * meter).toFixed(3)
    unitVolume = Number(myUnit * liter).toFixed(3)
    unitMass = Number(myUnit * kilogram).toFixed(3)
    unitFeetToMeter = Number(myUnit * 0.305).toFixed(3)
    unitGallonToLiter = Number(myUnit * 3.785).toFixed(3)
    unitPoundToKilo = Number(myUnit * 0.453).toFixed(3)
    let messageMeter = `${myUnit} meters = ${unitMeter} feet | 
                        ${myUnit} feet = ${unitFeetToMeter} meters`
    let messageVolume = `${myUnit} liters = ${unitVolume} gallons | 
                        ${myUnit} gallons = ${unitGallonToLiter} liter`
    let messageMass = `${myUnit} kilos = ${unitMass} pounds | 
                        ${myUnit} pound = ${unitPoundToKilo} kilos`
    pBoxMeter.innerHTML = messageMeter
    pBoxVolume.innerHTML = messageVolume
    pBoxMass.innerHTML = messageMass
   
}