const express = require('express')

const port = 5000
const app = express()



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`)
})