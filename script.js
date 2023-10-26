const form = document.querySelector("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    if(height === '' || weight === '' || isNaN(height) || isNaN(weight)){
        result.innerHTML = `Please enter the correct values.`
    } else {const bmi = ((weight)/((height*height)/10000)).toFixed(2)
    result.innerHTML = `Your BMI is ${bmi}`
}
});
