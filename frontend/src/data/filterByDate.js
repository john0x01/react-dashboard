const { filterByName } = require('./filterByName')
const { getTotal } = require('./total')

const filterByDate = (productDb, setDate=undefined) => {
    let productList = productDb
    let separatedProducts = {}
    let dateList = []

    for(let index in productList) {
        let productDate = productList[index].date.substring(0, 10).trim()
        if(dateList.includes(productDate)) {
            separatedProducts[productDate]["sales"].push(productList[index])
            // console.log(separatedProducts[productDate])
        } else {
            // console.log(productDate)
            dateList.push(productDate)
            separatedProducts[productDate] = {}
            separatedProducts[productDate]["sales"] = []
            separatedProducts[productDate]["balance"] = {}
        }
    }
    for(let date in separatedProducts) {
        separatedProducts[date]["sales"] = filterByName(separatedProducts[date]["sales"])
    }

    for(let date in separatedProducts) {
        separatedProducts[date]["balance"] = {
            "totalQtde": getTotal(separatedProducts[date]["sales"]).totalQtde,
            "totalRevenue": getTotal(separatedProducts[date]["sales"]).totalRevenue
        }

    }

    if(setDate) {
        return separatedProducts[setDate]
    } else {
        return separatedProducts
    }


}

module.exports = { filterByDate }