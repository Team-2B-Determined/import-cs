const axios = require('axios')

const TEST_URL = "http://localhost:5000/test/"

test = 'routing'

return axios
    .post(TEST_URL + 'dbget')
    .then(response => {
        console.log(response.data)
        return response.data
    })