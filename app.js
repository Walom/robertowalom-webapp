const express = require('express')
const app = express()
const port = 8085

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/spotify', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log(`Little site listening at port ${port}`)
})