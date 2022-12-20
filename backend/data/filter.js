const filterByName = (productDb) => {
    let productList = productDb
    let separatedProducts = []
    let nameList = []

    for(let index in productList) {
        let productName = productList[index].name
        let productQtde = productList[index].qtde
        let productPrice = productList[index].price

        if(nameList.includes(productName)) {
            for(let t in separatedProducts) {
                if(separatedProducts[t].name == productName) {
                    separatedProducts[t].qtde += productQtde
                    separatedProducts[t].revenue += productPrice * productQtde
                }
            }
        } else {
            nameList.push(productName)
            separatedProducts.push({
                "name": productName,
                "qtde": productQtde,
                "revenue": productPrice * productQtde
            })
        }
    }

    return separatedProducts
}

const filterByDate = productDb => {
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
    for(let t in separatedProducts) {
        separatedProducts[t] = filterByName(separatedProducts[t])
    }
    return separatedProducts
}


module.exports = { filterByName, filterByDate }