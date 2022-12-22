const axios = require('axios').default
const baseApiUrl = 'http://localhost:3001'

const { getTotal } = require('./data/total')
const { filterByDate } = require('./data/filterByDate')
const { filterByName } = require('./data/filterByName')
const { bestSeller, getMean } = require('./data/ranking')
const { lastSeven } = require('./data/lastSeven')
const { dailys } = require('./data/dailys')



async function axiosGet() {
    const response = await axios.get(`${baseApiUrl}/sales`)
    return response.data
}


axiosGet()
    .then(response => {
        // console.log(response)
        // console.log(filterByName(response))
        // console.log(getTotal(fi(response)))
        // console.log(filterByDate(response, '2/11/2022'))
        // const data = filterByDate(response, '10/11/2022')
        // console.log(data)
        // console.log(bestSeller(filterByName(response)))
        // console.log(getMean(filterByDate(response)))
        // console.log(filterByName(lastSeven(response)))
        // console.log(getTotal(lastSeven(response)))
        console.log(dailys(response, 30))
    })


