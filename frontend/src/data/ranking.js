const { filterByDate } = require('./filterByDate')

const bestSeller = productDb => {
    let bestSell = {}
    let mostSold = 0
    const productArray = productDb

    for(let i in productArray) {
        if(productArray[i].qtde > mostSold) {
            bestSell = productArray[i]
            mostSold = productArray[i].qtde
        } 
    }

    return bestSell
}

const getMean = productDb => {
    let mean = 0
    let revenueList = []
    for(let date in productDb) {
        revenueList.push(Number((productDb[date].balance.totalRevenue).toFixed(2)))
    }
    for(let sold of revenueList) {
        mean += sold
    } 
    mean = mean / Object.keys(productDb).length // 30 days (standard)
    return Number(mean.toFixed(2))
}

module.exports = { bestSeller, getMean }
