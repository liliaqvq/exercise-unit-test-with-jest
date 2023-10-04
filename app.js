// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    //return the dollar value
    return valueInDollar;
}
//console for ourselves
console.log(fromEuroToDollar(3.5))

const fromDollarToYen = function(valueInDollar){
    // convert the given valueinDollar to yens
    let valueInYen = valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"]; 
    //return the yen value
    return valueInYen; 
}

const fromYenToPound = function(valueInYen){
    //convert the given valueinYen to pound
    let valueInPound = valueInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    // return the pound value
    return valueInPound;
}

// export the function to be used on other files 
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };