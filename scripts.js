const convertButton = document.querySelector(".cButton")
const selectFrom = document.querySelector(".from")
const selectTo = document.querySelector(".to")
const dolarToday= 5
const euroToday = 6



function convertValues(){
    const inputMain = document.querySelector(".mainInput").value
    const convertedValue = inputMain / dolarToday
    const valueOne = document.querySelector("#valueToBeConverted")
    const valueTwo = document.querySelector("#finalValue")



    valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMain)



    if(selectTo.value === "USD"){
        valueTwo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputMain/dolarToday)
    }
    if(selectTo.value === "EUR"){
        valueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputMain/euroToday)
    }

}

 function photoChanger(){
        const imgChanger = document.querySelector("#lastCountry")
        const photoChanger = document.querySelector(".imgeuro")

        if(selectTo.value === "USD"){
            imgChanger.innerHTML = "USD"
            photoChanger.src = "./assets/USA-dolar.png"
        }
        if(selectTo.value === "EUR"){
            imgChanger.innerHTML = "EUR"
            photoChanger.src = "./assets/Euro.png"
        }
        
        convertValues()
    }


    selectTo.addEventListener("change", photoChanger)

convertButton.addEventListener("click", convertValues)


