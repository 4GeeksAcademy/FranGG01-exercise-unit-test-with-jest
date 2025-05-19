const { fromYenToPound, fromDollarToYen, fromEuroToDollar } = require('./app.js');
test("One euro to Dollar", function() {
    const expectedValue = fromEuroToDollar(3.5);
    const testValue = 3.5 * 1.07;
    expect(testValue).toBe(expectedValue); 
})

test("One dollar to Yen", function() {
    const expectedValue = fromDollarToYen(1);
    const testValue =  (1 / 1.07) * 156.5;;
    expect(testValue).toBe(expectedValue)
})

test("One Yen to Pound", function() {
    const expectedValue = fromYenToPound(1);
    const testValue =  (1 / 156.5) * 0.87;
    expect(testValue).toBe(expectedValue)
})