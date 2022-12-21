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




module.exports = { filterByName }
// Filter by date will return:
// {
//     "01/11/2022": [
//         "...": "...",
//         "...": "..."
//     ],
//     "02/11/2022": [
//         "...": "...",
//     ]
//     ...
// }