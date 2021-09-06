const PORT = 8080
const express = require('express')
// accept req from everywhere
const cors = require('cors')
// parse data from req
const app = express()
app.use(cors())
app.use(express.json())
// define enpoints

let processParams = (req) => {
  return Object.assign({}, req.body, req.params, req.query)
}

app.get('/getEmployee', (req, resp) => {
  let employee = {name: "juve"}
  resp.send(employee)
})


app.post('/createEmployee', (req, resp) => {
  let dataFromClient = processParams(req)
  resp.send(dataFromClient)
})
app.put('/updatEemployee', (req, resp) => {})
app.patch('/updatPartialEemployee', (req, resp) => {})
app.delete('/deleteEemployee', (req, resp) => {})

app.listen(PORT, () => {
  console.log(`app running listening ${PORT}`)
})



