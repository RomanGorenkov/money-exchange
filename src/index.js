// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var moneyValue = {
        "H_value": 50,
        "Q_value": 25,
        "D_value": 10,
        "N_value": 5,
        "P_value": 1
    };

     var moneyCount = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0
    };

    for(var key in moneyCount){
        try{
            if(currency > 9999){
               newError ={
                error: "You are rich, my friend! We don't have so much coins for exchange"
               }
                throw  newError;
            }
            if(currency < 0){
                currency = 0;
            }
        }catch (e){
            return e;
        }
        moneyCount[key] = Math.floor(currency/moneyValue[key+"_value"]);
        if(moneyCount[key] == 0){
            delete moneyCount[key];
        }else{
            currency=currency-moneyCount[key]*moneyValue[key + "_value"];
        }
        
    }
    return moneyCount;
}