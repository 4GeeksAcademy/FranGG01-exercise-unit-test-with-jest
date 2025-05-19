let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

function fromDollarToYen (dollarAmount) {
    let euros = dollarAmount / oneEuroIs["USD"];
    let yenes = euros * oneEuroIs["JPY"];
    return yenes;
}
function fromEuroToDollar (euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}
function fromYenToPound (yenAmount) {
    let euros = yenAmount / oneEuroIs["JPY"];
    let pounds = euros * oneEuroIs["GBP"];
    return pounds;
}
module.exports = {fromYenToPound, fromDollarToYen, fromEuroToDollar }