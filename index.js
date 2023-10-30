const team3data = require('./data/data.js')
const team5data = require('./data/data.js')

const express = require('express')
const app = express()

app.use(express.json())
app.post('/team3/register', (req, res) => {
  console.log(req.body)
  let flag = 0
  team3data.forEach(element => {
    if(element.user_id === req.body.user_id) {
      element.log.push(req.body.log[0])
      flag = 1
    }
  });

  if(flag === 0) {
    team3data.push(req.body)  
  }
  console.log(team3data)
  res.send("확인이요")
})

app.get('/team3/login', (req, res) => {
  console.log("team3 login data:", team3data)
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