const axios = require('axios').default
const baseApiUrl = 'http://localhost:3001'

const { getTotal } = require('./data/total')
const { filterByDate } = require('./data/filterByDate')
const { filterByName } = require('./data/filterByName')
const { bestSeller, getMean } = require('./data/ranking')




async function axiosGet() {
    const response = await axios.get(`${baseApiUrl}/sales`)
    return response.data
}

axiosGet().then(response => (filterByName(response)))
axiosGet()
    .then(response => {
        // console.log(filterByName(response))
        console.log(getTotal(filterByName(response)))
        // console.log(filterByDate(response, '01/11/2022'))
        // console.log(bestSeller(filterByName(response)))
        // console.log(getMean(filterByDate(response)))

    })


