var euroEmount = +prompt("Please enter the amount of euros", 100);
var dollarEmount = +prompt("Please enter the amount of dollars", 100);
function moneyExchange() {
    var euroSum, dollarSum, euro, dollar, ratio, ration2;
    euro = 32.18;
    dollar = 27.16;
    ration = euro / dollar;
    ration2 = ration.toFixed(2);
    if (euroEmount && dollarEmount) {
        euroSum = euroEmount * euro;
        dollarSum = dollarEmount * dollar;
        alert(euroEmount + " euros are equal to " + euroSum.toFixed(2) + " grns, " + dollarEmount + " dollars are equal to " + dollarSum.toFixed(2) + " grns, one euro is equal to " + ration2 + " dollars.")
    } else {
        alert("Please enter the cerrect amount of euro or dollars")
    }
}
setTimeout(moneyExchange, 10000);
alert("hello");