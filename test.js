// importar la función sum del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

// comienza tu primera prueba
test("100 USD = 10658.33 Yen", () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromDollarToYen(100);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(10658.33);
});

test("One euro should be 1.206 dollars", function (){

    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("1000 JPY should be 6.25 GBP", function (){

let total = fromYenToPound(1000)
expect(total).toBe(6.25)
});
