// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (cantidad) => {
     cantidad = cantidad/oneEuroIs.USD //pasando de USD a EUR
     cantidad = cantidad*oneEuroIs.JPY //pasando de  a YEN
     cantidad = cantidad.toFixed(2) //devuelve como string
     cantidad = parseFloat(cantidad) //reconvierte a numero.

     return cantidad
}

//Our program needs to have functions to convert fromDollarToYen, fromEuroToDollar and fromYanToPound.

const fromEuroToDollar = (cantidad)=>{
    cantidad = cantidad*oneEuroIs.USD //Pasando Euro a Dolar
    return cantidad
}

const fromYenToPound =(cantidad) => {
    cantidad = cantidad/oneEuroIs.JPY
    cantidad = cantidad*oneEuroIs.GBP
    cantidad = cantidad.toFixed(2) //devuelve como string
    cantidad = parseFloat(cantidad) //reconvierte a numero.
    return cantidad


}



module.exports= {fromDollarToYen,fromEuroToDollar,fromYenToPound};
