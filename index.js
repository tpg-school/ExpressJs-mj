const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Capacitacion Git')
})

app.get('/datos', (req, res) => {
    res.send('Datos Git')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
