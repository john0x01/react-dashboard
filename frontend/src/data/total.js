const { filterByName } = require('./filterByName')

const getTotal = productDb => {
    let productArray = productDb
    let totalRevenue = 0
    let totalQtde = 0
    for(let i in productArray) {
        if(typeof productArray[i] == 'object') {
            totalRevenue += productArray[i].revenue
            totalQtde += productArray[i].qtde
        }
    }
    return {
        "totalRevenue": totalRevenue,
        "totalQtde": totalQtde
    }
}

module.exports = { getTotal }

// [
//     {
//       name: 'Calculadora financeira 12c Gold HP',
//       qtde: 4717,
//       revenue: 33226886.049999997
//     },
//     {
//       name: 'Lapiseira 0.7mm graphgear azul',
//       qtde: 4608,
//       revenue: 100915.20000000003
//     },
//     {
//       name: 'Gaveteiro de chão c/3 gavetas',
//       qtde: 5253,
//       revenue: 209594.7
//     },
//     {
//       name: 'Papel sulfite 75g alcalino A4',
//       qtde: 4682,
//       revenue: 93171.79999999996
//     },
//     {
//       name: 'Monitor LED 18.5 widescreen',
//       qtde: 5720,
//       revenue: 1880907.5999999999
//     }
//   ]