const { getTotal } = require('./total')
const { filterByDate } = require('./filterByDate')
const { filterByName } = require('./filterByName')

const dailys = (productDb, interval) => {
    let dailysArray = []
    let i = 0
    while(i < interval) {
        try {
            dailysArray.push(filterByDate(productDb)[`${31 - interval + i}/11/2022`].balance)
        } catch(err) {}
        i += 1
    }

    return dailysArray
}

module.exports = { dailys }