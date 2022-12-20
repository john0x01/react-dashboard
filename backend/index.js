const axios = require('axios').default
const baseApiUrl = 'http://localhost:3001'

const filter = require('./filter')

async function axiosGet() {
    const response = await axios.get(`${baseApiUrl}/sales`)
    return response.data
}

axiosGet()
    .then(response => {
        console.log(filter(response))
        // console.log(response[0].date.substring(0, 2))
    })


