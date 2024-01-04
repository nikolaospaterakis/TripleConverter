/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById("convert-btn")
let convertValue = document.getElementById("giveNumber")
const meterFeetEl = document.getElementById("meter-feet")
const litersGallonsEl = document.getElementById("liters-gallons")
const kiloPoundsEl = document.getElementById("kilo-pounds")
const modeEl = document.getElementById("mode")
let isDarkmode = false;
const unitsEl = document.getElementsByClassName("unit")
const unitLengthEl = document.getElementById("unit-length")
const unitLenghtH4El = document.getElementById("meter-feet")
const unitLiterEl = document.getElementById("unit-liter")
const unitLiterH4El = document.getElementById("liters-gallons")
const unitKiloEl = document.getElementById("unit-kilo")
const unitKiloH4El = document.getElementById("kilo-pounds")

convertEl.addEventListener("click", function() {
    converter(convertValue.value, "meters", "feet", 3.281, meterFeetEl)
    converter(convertValue.value, "liters", "gallons", 0.264, litersGallonsEl)
    converter(convertValue.value, "kilos", "pounds", 2.204, kiloPoundsEl)
})

modeEl.addEventListener("click", function() {
    if (isDarkmode) {
        document.body.style.backgroundColor = "#F4F4F4"
        unitLengthEl.style.backgroundColor = "white"
        unitLengthEl.style.color = "#CCC1FF"
        unitLenghtH4El.style.color = "#353535"
        unitLiterEl.style.backgroundColor = "white"
        unitLiterEl.style.color = "#CCC1FF"
        unitLiterH4El.style.color = "#353535"
        unitKiloEl.style.backgroundColor = "white"
        unitKiloEl.style.color = "#CCC1FF"
        unitKiloH4El.style.color = "#353535"
        document.getElementById("mode").innerHTML = "Light Mode ☀️"
        document.getElementById("mode").style.color = "#353535"
        document.getElementById("mode").style.backgroundColor = "white"
        document.getElementById("mode").style.border = "1px solid white"
        convertEl.style.color = "#353535"
        convertEl.style.backgroundColor = "white"
        convertEl.style.border = "1px solid white"
        isDarkmode = !isDarkmode
    } else {
        document.body.style.backgroundColor = "#1F2937"
        unitLengthEl.style.backgroundColor = "#273549"
        unitLengthEl.style.color = "#CCC1FF"
        unitLenghtH4El.style.color = "white"
        unitLiterEl.style.backgroundColor = "#273549"
        unitLiterEl.style.color = "#CCC1FF"
        unitLiterH4El.style.color = "white"
        unitKiloEl.style.backgroundColor = "#273549"
        unitKiloEl.style.color = "#CCC1FF"
        unitKiloH4El.style.color = "white"
        document.getElementById("mode").innerHTML = "Dark Mode 🌙"
        document.getElementById("mode").style.color = "white"
        document.getElementById("mode").style.backgroundColor = "#273549"
        document.getElementById("mode").style.border = "1px solid #273549"
        convertEl.style.color = "white"
        convertEl.style.backgroundColor = "#273549"
        convertEl.style.border = "1px solid #273549"
        isDarkmode = !isDarkmode
    }
})

function converter(givenValue, firstType, secondType, convValue, position) {
    let firstConvert = givenValue * convValue
    let secondConvert = givenValue / convValue
    let message = ""
     message = `${givenValue} ${firstType} = ${firstConvert.toFixed(3)} ${secondType} | ${givenValue} ${secondType} = ${secondConvert.toFixed(3)} ${firstType}`
    position.innerHTML = message
}