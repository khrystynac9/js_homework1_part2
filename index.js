function moneyExchange() {
    var euroSum, dollarSum, euro, dollar, ratio, ration2;
    do {
        var euroEmount = prompt("Please enter the amount of EUROS", 100);
        var euroNum = +euroEmount;
    }
    while (euroEmount == "" || euroNum < 0 || isNaN(euroNum))    
    do {
        var dollarEmount = prompt("Please enter the amount of DOLLARS", 100);
        var dollarNum = +dollarEmount;
    }
    while (dollarEmount == "" || dollarNum < 0 || isNaN(dollarNum));
    euro = 32.18;
    dollar = 27.16;
    ration = euro / dollar;
    ration2 = ration.toFixed(2);
    euroSum = euroNum * euro;
    dollarSum = dollarNum * dollar;
    alert(euroNum + " euros are equal to " + euroSum.toFixed(2) + " grns, " + dollarNum + " dollars are equal to " + dollarSum.toFixed(2) + " grns, one euro is equal to " + ration2 + " dollars.");
}
moneyExchange();