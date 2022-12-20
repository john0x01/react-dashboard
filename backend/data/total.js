const { filterByName, filterByDate } = require('./filter')

const getTotal = productDb => {
    let productArray = filterByName(productDb)
    let totalRevenue = 0
    let totalQtde = 0
    for(let i in productArray) {
        totalRevenue += productArray[i].revenue
        totalQtde += productArray[i].qtde
    }
    return {
        "totalRevenue": totalRevenue,
        "totalQtde": totalQtde
    }
}

module.exports = getTotal