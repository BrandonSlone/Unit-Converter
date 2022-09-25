const measurementInput = document.getElementById("measurement-input")
const inputSpan = document.getElementById("input-span")
const convertBtn = document.getElementById("convert-button")
const lengthConversion = document.getElementById("length")
const volumeConversion = document.getElementById("volume")
const massConversion = document.getElementById("mass")


measurementInput.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
       convert()
    }
  })



function convert(){

    lengthConversion.textContent = `
    
    ${measurementInput.value} meter/s = ${measurementInput.value * 3.28084} feet | ${measurementInput.value} feet = ${measurementInput.value * 0.3048} meters   `

    volumeConversion.textContent =  `
    
    ${measurementInput.value} leter/s = ${measurementInput.value * 0.264172} gallo/s | ${measurementInput.value} gallon/s = ${measurementInput.value * 3.78541} leter/s   `

    massConversion.textContent = `
    
    ${measurementInput.value} pound/s = ${measurementInput.value * 0.453592} kilograms | ${measurementInput.value} kilogram/s = ${measurementInput.value * 2.20462} pounds   `


}

measurementInput.addEventListener('input', function(event){
    inputSpan.innerHTML = this.value.replace(/\s/g, '&nbsp;')
    this.style.width = inputSpan.offsetWidth + 'px'
    
})

function clearResults(){

   $("div").hide()

}

measurementInput.addEventListener('keydown', function(){
    if (measurementInput.value == null){ $(".results").innerText = ""}
})



