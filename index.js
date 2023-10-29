const team3data = require('./data/data.js')
const team5data = require('./data/data.js')

const express = require('express')
const app = express()

app.use(express.json())
app.post('/team3/register', (req, res) => {
  console.log(req.body)
  team3data.push(req.body)
  console.log(team3data)
  res.send("확인이요")
})

app.get('/team3/login', (req, res) => {
  res.send(team3data)
})

app.post('/team5/register', (req, res) => {
  console.log(req.body)
  team5data.push(req.body)
  console.log(team5data)
  res.send("확인이요")
})

app.get('/team5/login', (req, res) => {
  res.send(team5data)
})

app.listen(3000)