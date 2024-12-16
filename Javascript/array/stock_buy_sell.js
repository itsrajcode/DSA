
function findmaxProfit(price) {
    minPrice = Infinity
    maxprofit = 0
    for (let i = 0; i < price.length; i++) {
        if (price[i] < minPrice) {
            minPrice = price[i]
        }
        else if (price[i] - minPrice > maxprofit) {
            maxprofit = price[i] - minPrice
            
            
         }
    }
    return maxprofit


}


price = [7, 1, 5, 3, 6, 4,16,17,20]
maxprofit = findmaxProfit(price)
console.log("The maximum profit is", maxprofit);
