// import the function sum from the app.js file
const { sum } = require('./app.js');

//start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    //we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')

    // use the function like it's supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)

    // if 1.206 dollars are 127.9 yens, then (4.2) dollars should be ((4.2/1.2)*127.9)
    const expected2 = (4.2/1.2) * 127.9;

    expect(fromDollarToYen(fromEuroToDollar(3.5))).toBe(447.6500000000001);

    //if 127.9 yen are 0.8 pounds, then (447.6500000000001) yens should be ((447.6500000000001/127.9)*0.8)
    const expected3 = (447.6500000000001/127.9)*0.8;

    expect(fromYenToPound(fromDollarToYen(fromEuroToDollar(3.5)))).toBe(2.8000000000000007)
})