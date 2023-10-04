// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
//console for ourselves
console.log(fromEuroToDollar(3.5))

const fromDollarToYen = function(valueInDollar){
    // convert the given valueinDollar to yens
    let valueInYen = valueInDollar * 127.9 / 1.2; 
    //return the yen value
    return valueInYen; 
}

const fromYenToPound = function(valueInYen){
    //convert the given valueinYen to pound
    let valueInPound = valueInYen * 0.8 / 127.9;
    // return the pound value
    return valueInPound;
}

// se supone que si vamos a convertir de dolares a yenes, entonces primero hay
// que deconvertir el valor de dolares a euros dividiendo por 1.2, y despues
// que sabemos el rate entre euro/yen, multiplicamos de nuevo ese valor pero
// por los yenes.... o la matematica me esta fallando?

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };