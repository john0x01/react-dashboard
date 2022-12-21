const axios = require('axios').default
const baseApiUrl = 'http://localhost:3001'

const { getTotal } = require('./data/total')
const { filterByDate } = require('./data/filterByDate')
const { filterByName } = require('./data/filterByName')

async function axiosGet() {
    const response = await axios.get(`${baseApiUrl}/sales`)
    return response.data
}

axiosGet()
    .then(response => {
        // console.log(getTotal(filterByName(response)))
        // console.log(filterByName(response))
        console.log(filterByDate(response))
        // console.log(response[0].date.substring(0, 2))
    })


