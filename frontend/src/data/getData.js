const { getTotal } = require('./total')
const { filterByName } = require('./filterByName')
const { bestSeller, getMean } = require('./ranking')

const getData = (productDb) => {
    return {
        bestSeller: bestSeller(filterByName(productDb)).name
    }
}