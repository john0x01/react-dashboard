const { filterByName } = require('./filterByName')
const { getTotal } = require('./total')

const filterByDate = (productDb, setDate=undefined) => {
    let productList = productDb
    let separatedProducts = {}
    let dateList = []

    for(let index in productList) {
        let productDate = productList[index].date.substring(0, 10)

        if(dateList.includes(productDate)) {
            separatedProducts[productDate].push(productList[index])
        } else {
            // console.log(productDate)
            dateList.push(productDate)
            separatedProducts[productDate] = []
        }
    }
    for(let date in separatedProducts) {
        separatedProducts[date] = filterByName(separatedProducts[date])
    }

    for(let date in separatedProducts) {
        separatedProducts[date].push({
            "totalQtde": getTotal(separatedProducts[date]).totalQtde,
            "totalRevenue": getTotal(separatedProducts[date]).totalRevenue
        })

    }

    if(setDate) {
        return separatedProducts[setDate]
    } else {
        return separatedProducts
    }
}

module.exports = { filterByDate }