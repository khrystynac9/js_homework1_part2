function moneyExchange() {
    var euroSum, dollarSum, euro, dollar, ratio, ration2;
    do {
        var euroEmount = +prompt("Please enter the amount of euros", 100);
    }
    while (euroEmount < 0 || isNaN(euroEmount));
    do {
        var dollarEmount = +prompt("Please enter the amount of dollars", 100);
    }
    while (dollarEmount < 0 || isNaN(dollarEmount));
    euro = 32.18;
    dollar = 27.16;
    ration = euro / dollar;
    ration2 = ration.toFixed(2);
    euroSum = euroEmount * euro;
    dollarSum = dollarEmount * dollar;
    alert(euroEmount + " euros are equal to " + euroSum.toFixed(2) + " grns, " + dollarEmount + " dollars are equal to " + dollarSum.toFixed(2) + " grns, one euro is equal to " + ration2 + " dollars.");
}
moneyExchange();