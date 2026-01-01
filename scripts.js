const convertButton = document.querySelector(".cButton")
const selectFrom = document.querySelector(".from")
const selectTo = document.querySelector(".to")
const dolarToday= 5
const euroToday = 6
const valueOne = document.querySelector("#valueToBeConverted")
const inputMain = document.querySelector(".mainInput").value
const valueTwo = document.querySelector("#finalValue")
const realToday = 1
const taxas = {
    BRL:1,
    EUR:6,
    USD:5,

} ;

function convertValues(){

    const inputMain = document.querySelector(".mainInput").value
    const valueOne = document.querySelector("#valueToBeConverted")
    const valueTwo = document.querySelector("#finalValue")


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
    if(selectTo.value === "BRL"){
        valueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMain) 
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
         if(selectTo.value === "BRL"){
            imgChanger.innerHTML = "BRL"
            photoChanger.src = "./assets/Brasil-Real.png"
        }
        
        convertValues()
    }

    function supChanger(){
        const supImgChanger = document.querySelector("#firstCountry")
        const supPhotoChanger = document.querySelector("#fImg")
        const valueOne = document.querySelector("#valueToBeConverted")
        const inputMain = document.querySelector(".mainInput").value

        if(selectFrom.value === "USD"){
            supPhotoChanger.src = "./assets/USA-dolar.png"
            supImgChanger.innerHTML = "USD"
            valueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputMain)
        }
        
        if(selectFrom.value === "EUR"){
            supPhotoChanger.src = "./assets/Euro.png"
            supImgChanger.innerHTML = "EUR"
             valueOne.innerHTML = new Intl.NumberFormat("de-DE", {
             style: "currency",
             currency: "EUR"
         }).format(inputMain)
        }
        
        if(selectFrom.value === "BRL"){
            supPhotoChanger.src = "./assets/Brasil-Real.png"
            supImgChanger.innerHTML = "BRL"
             valueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
             style: "currency",
             currency: "BRL"
         }).format(inputMain)
        
        }               
        convertValues()
        
    }

    selectTo.addEventListener("change", photoChanger)
    selectFrom.addEventListener("change", supChanger)
    convertButton.addEventListener("click", convertValues)
    
