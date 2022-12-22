const { filterByDate } = require('./filterByDate')
const { filterByName } = require('./filterByName')

const lastSeven = productDb => {
    let sevenArray = []
    let newArray = []
    let i = 0
    while(i < 7) {
        sevenArray.push(filterByDate(productDb)[`${30 - 6 + i}/11/2022`]
            .sales)
        i += 1
    }
    for(let pArray of sevenArray) {
        for(let obj of pArray) {
            newArray.push(obj)
        }
    }

    return newArray
}

module.exports = { lastSeven }